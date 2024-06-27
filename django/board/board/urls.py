from django.urls import path
from . import views

app_name = "board"

urlpatterns = [
    # http://localhost:8000/board/
    path("", views.question_list, name="question_list"),
    # http://localhost:8000/board/1
    path("<int:qid>/", views.question_detail, name="question_detail"),
    # http://localhost:8000/board/question/create
    path("question/create/", views.question_create, name="question_create"),
    # http://localhost:8000/board/answer/create/2 (질문번호)
    path("answer/create/<int:qid>/", views.answer_create, name="answer_create"),
]
