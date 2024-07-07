from django.urls import path, include
from django.views.generic import RedirectView
from . import views

app_name = "kream"

urlpatterns = [
    path("detail/<int:pid>/", views.detail, name="detail"),
]
