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
    # ---------------------------------------------------
    # question 댓글
    # http://localhost:8000/board/comment/create/question/1
    path(
        "comment/create/question/<int:qid>/",
        views.comment_create_question,
        name="comment_create_question",
    ),
    # http://localhost:8000/board/comment/modify/question/1
    path(
        "comment/modify/question/<int:cid>/",
        views.comment_modify_question,
        name="comment_modify_question",
    ),
    # http://localhost:8000/board/comment/delete/question/1
    path(
        "comment/delete/question/<int:cid>/",
        views.comment_delete_question,
        name="comment_delete_question",
    ),
    # ---------------------------------------------------
    # answer 댓글
    # http://localhost:8000/board/comment/create/answer/1
    path(
        "comment/create/answer/<int:aid>/",
        views.comment_create_answer,
        name="comment_create_answer",
    ),
    # http://localhost:8000/board/comment/modify/answer/1
    path(
        "comment/modify/answer/<int:cid>/",
        views.comment_modify_answer,
        name="comment_modify_answer",
    ),
    # http://localhost:8000/board/comment/delete/answer/1
    path(
        "comment/delete/answer/<int:cid>/",
        views.comment_delete_answer,
        name="comment_delete_answer",
    ),
    # =-========================================================
    # 추천
    # http://localhost:8000/board/vote/question/qid
    path("vote/question/<int:qid>/", views.vote_question, name="vote_question"),
    # http://localhost:8000/board/vote/answer/aid
    path("vote/answer/<int:aid>/", views.vote_answer, name="vote_answer"),
]
