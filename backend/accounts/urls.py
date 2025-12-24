from django.urls import path
from .views import RegisterView, CurrentUserView, AdminUserListView, UserActivityView, LogoutView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('me/', CurrentUserView.as_view(), name='current_user'),
    # Admin-only endpoints
    path('admin/users/', AdminUserListView.as_view(), name='admin_users'),
    path('admin/users/<int:user_id>/activity/', UserActivityView.as_view(), name='user_activity'),
    # Logout endpoint to record logout event
    path('logout/', LogoutView.as_view(), name='logout'),
]
