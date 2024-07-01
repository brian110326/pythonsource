from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from board.models import Question, Answer, Comment
from board.forms import QuestionForm, AnswerForm, CommentForm

from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.utils import timezone

from django.contrib import messages

from django.db.models import Q, Count  # or 조건으로 데이터 조회


@login_required(login_url="common:login")
def vote_question(request, qid):
    question = get_object_or_404(Question, id=qid)

    # 내가 작성한 글은 내가 추천 못함
    if question.author == request.user:
        # spring에서 log찍는거랑 비슷
        messages.error(request, "본인이 작성한 글은 추천이 불가능합니다")
    else:
        # 누가 작성했는지 정보 전달
        # add 함수에서 한번 누르면 또 못 올라가게 자동으로 해줌
        question.voter.add(request.user)

    return redirect("board:question_detail", qid)


@login_required(login_url="common:login")
def vote_answer(request, aid):
    answer = get_object_or_404(Answer, id=aid)

    # 내가 작성한 글은 내가 추천 못함
    if answer.author == request.user:
        # spring에서 log찍는거랑 비슷
        messages.error(request, "본인이 작성한 글은 추천이 불가능합니다")
    else:
        # 누가 작성했는지 정보 전달
        answer.voter.add(request.user)

    return redirect("board:question_detail", answer.question.id)
