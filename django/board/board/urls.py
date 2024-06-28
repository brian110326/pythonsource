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
    # http://localhost:8000/board/question/modify/3
    path("question/modify/<int:qid>/", views.question_modify, name="question_modify"),
    # http://localhost:8000/board/question/delete/3
    path("question/delete/<int:qid>/", views.question_delete, name="question_delete"),
    # http://localhost:8000/board/answer/modify/3/2
    path("answer/modify/<int:aid>/", views.answer_modify, name="answer_modify"),
    # http://localhost:8000/board/answer/delete/3/5
    path("answer/delete/<int:aid>/", views.answer_delete, name="answer_delete"),
]
