# Aiverse Django backend

This folder contains a minimal Django REST backend for the Aiverse frontend.

Quick start (requires Python 3.9+):

```bash
cd backend
python -m venv .venv
.
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
# or on cmd: .\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Endpoints:
- `POST /api/auth/register/` — register with `username`, `password`, optional `email`, `first_name`, `last_name`
- `POST /api/auth/token/` — obtain JWT access/refresh tokens (username + password)
- `POST /api/auth/token/refresh/` — refresh access token
- `GET /api/auth/me/` — get current authenticated user (requires Bearer JWT)

Notes:
- CORS is enabled for development; restrict origins in production.
- This is a minimal scaffold; extend per your needs (email verification, password reset, social auth, etc.).
