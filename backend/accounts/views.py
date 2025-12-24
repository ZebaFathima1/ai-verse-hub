from rest_framework import generics, permissions, status
from .serializers import RegisterSerializer, UserSerializer, UserProfileSerializer, UserActivitySerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import UserProfile, UserActivity
from django.utils import timezone
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.db import transaction



class TokenObtainAndLogView(TokenObtainPairView):
    """Extend simplejwt TokenObtainPairView to record login activity."""
    serializer_class = TokenObtainPairSerializer

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        resp = super().post(request, *args, **kwargs)
        if resp.status_code == 200:
            # On successful token obtain, record login
            user = None
            username = request.data.get('username') or request.data.get('email')
            try:
                # try both username and email
                from django.contrib.auth import get_user_model
                UserModel = get_user_model()
                user = UserModel.objects.filter(username=request.data.get('username')).first() or UserModel.objects.filter(email=request.data.get('username')).first()
            except Exception:
                user = None

            if user:
                ip = request.META.get('REMOTE_ADDR')
                now = timezone.now()
                UserActivity.objects.create(user=user, login_time=now, ip_address=ip)
                profile, _ = UserProfile.objects.get_or_create(user=user)
                profile.is_online = True
                profile.last_login_time = now
                profile.save()

        return resp


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer


class CurrentUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class AdminUserListView(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = UserProfileSerializer

    def get_queryset(self):
        return UserProfile.objects.select_related('user').all()


class UserActivityView(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = UserActivitySerializer

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        user = get_object_or_404(User, pk=user_id)
        return UserActivity.objects.filter(user=user)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        # Mark current activity logout for this user (closest open activity)
        user = request.user
        ip = request.META.get('REMOTE_ADDR')
        now = timezone.now()
        activity = UserActivity.objects.filter(user=user, logout_time__isnull=True).order_by('-login_time').first()
        if activity:
            activity.logout_time = now
            activity.session_duration = now - activity.login_time
            activity.save()

        # update profile
        profile, _ = UserProfile.objects.get_or_create(user=user)
        profile.is_online = False
        profile.last_logout_time = now
        profile.save()

        return Response({'detail': 'Logged out recorded'}, status=status.HTTP_200_OK)
