import os
import sys
import django
from pathlib import Path

# Ensure project root (backend/) is on sys.path so `aiverse_api` can be imported
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aiverse_api.settings')
django.setup()

from django.contrib.auth import get_user_model

def create_admin(username='admin', email='admin@example.com', password='AdminPass123!'):
    User = get_user_model()
    if User.objects.filter(username=username).exists():
        user = User.objects.get(username=username)
        user.email = email
        user.is_staff = True
        user.is_superuser = True
        user.set_password(password)
        user.save()
        print(f"Updated existing superuser '{username}'.")
    else:
        User.objects.create_superuser(username=username, email=email, password=password)
        print(f"Created superuser '{username}'.")

if __name__ == '__main__':
    # NOTE: change these values if you want different credentials
    create_admin(username='admin', email='admin@example.com', password='AdminPass123!')
