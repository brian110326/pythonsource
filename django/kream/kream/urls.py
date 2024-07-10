from django.urls import path, include
from django.views.generic import RedirectView
from . import views

app_name = "kream"

urlpatterns = [
    path("home/", views.home, name="home"),
    path("detail/<int:pid>/<int:year>/", views.detail, name="detail"),
    path("list/", views.list, name="list"),
    path("monthList/", views.monthList, name="monthList"),
    path("monthly/<int:year>/<int:month>/", views.monthlyReport, name="monthlyReport"),
    path("checkList/", views.checkList, name="checkList"),
    path("checkListDetail/<int:cid>/", views.checkListDetail, name="checkListDetail"),
    path("checkListDetail/modify/<int:cid>/", views.modify, name="modify"),
    path("checkListDetail/delete/<int:cid>/", views.delete, name="delete"),
]
