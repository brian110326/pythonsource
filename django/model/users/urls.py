from django.urls import path, include
from . import views


urlpatterns = [
    path("register/", views.register, name="register"),
    path("login/", views.common_login, name="login"),
    path("logout/", views.common_logout, name="logout"),
    path("", views.index, name="index"),
]
