from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy

from . import views

app_name = "common"

urlpatterns = [
    path("register/", views.register, name="register"),
    path("login/", auth_views.LoginView.as_view(), name="login"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    # 기존 비밀번호 변경 후 세션 값 다시 담아줌
    path(
        "password_change/",
        auth_views.PasswordChangeView.as_view(
            template_name="registration/password_change.html",
            success_url=reverse_lazy("index"),
        ),
        name="password_change",
    ),
]
