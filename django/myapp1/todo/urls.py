from django.urls import path
from . import views

urlpatterns = [
    path("", views.list, name="list"),
    # http://127.0.0.1:8000/todo/create/
    path("create/", views.create, name="create"),
    # http://127.0.0.1:8000/todo/1
    path("<int:id>/", views.read, name="read"),
    # http://127.0.0.1:8000/todo/done/1
    path("done/<int:id>/", views.done, name="done"),
    # http://127.0.0.1:8000/todo/done
    path("done/", views.done_list, name="done_list"),
    # http://127.0.0.1:8000/todo/edit/2
    path("edit/<int:id>/", views.edit, name="edit"),
]
