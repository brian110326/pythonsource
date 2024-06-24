from django.urls import path, include
from . import views

urlpatterns = [
    # views.list : 경로를 담당할 함수
    # name : 별칭
    path("", views.list, name="list"),
]
