from django.urls import path
from . import views

app_name = "board"

urlpatterns = [
    # http://127.0.0.1:8000/board/
    path("", views.question_list, name="question_list"),
    # http://127.0.0.1:8000/board/1
    path("<int:qid>/", views.question_detail, name="question_detail"),
]
