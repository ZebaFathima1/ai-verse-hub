from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from accounts.views import TokenObtainAndLogView

urlpatterns = [
    # Keep Django's built-in admin available under `/django-admin/` so
    # we can use `/admin/` for the custom SPA dashboard.
    path('django-admin/', admin.site.urls),
    # Provide a redirect so `/admin/` opens Django's admin at `/django-admin/`.
    # This gives immediate access to the backend admin while the SPA admin is being debugged.
    path('admin/', RedirectView.as_view(url='/django-admin/', permanent=False)),
    path('api/auth/token/', TokenObtainAndLogView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/', include('accounts.urls')),
    # Catch-all route for the single page app. Any URL not matched above
    # (for example `/` or `/events/123`) will return the frontend
    # `index.html` so the client-side router can handle navigation.
    # Exclude static, assets, media and api paths so those are handled
    # by Django/WhiteNoise/staticfiles instead of returning index.html.
    re_path(r'^(?!django-admin/|static/|assets/|api/|media/).*$', TemplateView.as_view(template_name='index.html')),
]
