from django.contrib import admin
from .models import UserProfile, UserActivity


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'department', 'year', 'role', 'is_online', 'last_login_time')
    search_fields = ('user__username', 'department', 'year')


@admin.register(UserActivity)
class UserActivityAdmin(admin.ModelAdmin):
    list_display = ('user', 'login_time', 'logout_time', 'ip_address')
    list_filter = ('user',)
