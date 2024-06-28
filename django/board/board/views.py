from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from .models import Question, Answer, Comment
from .forms import QuestionForm, AnswerForm, CommentForm

from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.utils import timezone

from django.contrib import messages


@login_required(login_url="common:login")
def question_create(request):
    if request.method == "POST":
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            # author ==> 현재 login한 사람
            question.author = request.user
            question.save()
            return redirect("board:question_list")
    else:
        form = QuestionForm()
    return render(request, "board/question_form.html", {"form": form})


@login_required(login_url="common:login")
def answer_create(request, qid):
    """
    답변등록
    """
    question = get_object_or_404(Question, id=qid)
    if request.method == "POST":
        form = AnswerForm(request.POST)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.question = question
            answer.author = request.user
            answer.save()
            # return redirect("board:question_detail", qid=qid)
            # detail 페이지의 특정 위치 지정
            return redirect(
                "{}#answer_{}".format(
                    resolve_url("board:question_detail", qid=qid), answer.id
                )
            )
    else:
        form = AnswerForm()

    # answer = Answer.objects.create(
    #     question=question, content=request.POST.get("content")
    # )

    # question.answer_set.create(content=request.POST.get("content"))

    # answer = Answer(question=question, content=request.POST.get("content"))
    # answer.save()

    # 실패 시 get 방식으로 처리
    context = {"question": question, "form": form}
    return render(request, "board/question_detail.html", context)


def question_list(request):
    """전체 질문 추출"""

    # 현재 페이지 번호 가져오기
    page = request.GET.get("page", 1)

    # question_list = Question.objects.all()
    question_list = Question.objects.order_by("-created_at")

    paginator = Paginator(question_list, 10)
    page_obj = paginator.get_page(page)

    context = {"question_list": page_obj}
    return render(request, "board/question_list.html", context)


def question_detail(request, qid):
    question = get_object_or_404(Question, id=qid)
    context = {"question": question}
    return render(request, "board/question_detail.html", context)


@login_required(login_url="common:login")
def question_modify(request, qid):
    question = get_object_or_404(Question, id=qid)
    if request.method == "POST":
        form = QuestionForm(request.POST, instance=question)
        if form.is_valid():
            question = form.save(commit=False)
            question.modified_at = timezone.now()
            question.save()
            return redirect("board:question_detail", qid=qid)
    else:
        form = QuestionForm(instance=question)

    return render(request, "board/question_form.html", {"form": form})


@login_required(login_url="common:login")
def question_delete(request, qid):
    question = get_object_or_404(Question, id=qid)
    question.delete()
    return redirect("board:question_list")


@login_required(login_url="common:login")
def answer_modify(request, aid):
    answer = get_object_or_404(Answer, id=aid)
    if request.method == "POST":
        form = AnswerForm(request.POST, instance=answer)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.modified_at = timezone.now()
            answer.save()
            # return redirect("board:question_detail", qid=answer.question.id)
            # 수정 후 수정한 answer로 바로 가기
            return redirect(
                "{}#answer_{}".format(
                    resolve_url("board:question_detail", qid=answer.question.id),
                    answer.id,
                )
            )

    else:
        form = AnswerForm(instance=answer)

    return render(request, "board/answer_form.html", {"form": form})


@login_required(login_url="common:login")
def answer_delete(request, aid):
    answer = get_object_or_404(Answer, id=aid)
    answer.delete()
    qid = answer.question.id
    return redirect("board:question_detail", qid)


@login_required(login_url="common:login")
def comment_create_question(request, qid):
    question = get_object_or_404(Question, id=qid)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.question = question
            comment.save()
            # return redirect("board:question_detail", qid)
            return redirect(
                "{}#comment_{}".format(
                    resolve_url("board:question_detail", qid),
                    comment.id,
                )
            )
    else:
        form = CommentForm()

    return render(
        request,
        "board/comment_form.html",
        {"form": form},
    )


@login_required(login_url="common:login")
def comment_modify_question(request, cid):
    comment = get_object_or_404(Comment, id=cid)
    if request.method == "POST":
        form = CommentForm(request.POST, instance=comment)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.modified_at = timezone.now()
            comment.save()
            # return redirect("board:question_detail", comment.question.id)
            return redirect(
                "{}#comment_{}".format(
                    resolve_url("board:question_detail", comment.question.id),
                    comment.id,
                )
            )
    else:
        form = CommentForm(instance=comment)

    return render(request, "board/comment_form.html", {"form": form})


@login_required(login_url="common:login")
def comment_delete_question(request, cid):
    comment = get_object_or_404(Comment, id=cid)
    comment.delete()
    return redirect("board:question_detail", comment.question.id)


@login_required(login_url="common:login")
def comment_create_answer(request, aid):
    answer = get_object_or_404(Answer, id=aid)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.answer = answer
            comment.save()
            # return redirect("board:question_detail", aid)
            return redirect(
                "{}#comment_{}".format(
                    resolve_url("board:question_detail", aid),
                    comment.id,
                )
            )
    else:
        form = CommentForm()

    return render(
        request,
        "board/comment_form.html",
        {"form": form},
    )


@login_required(login_url="common:login")
def comment_modify_answer(request, cid):
    comment = get_object_or_404(Comment, id=cid)
    if request.method == "POST":
        form = CommentForm(request.POST, instance=comment)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.modified_at = timezone.now()
            comment.save()
            # return redirect("board:question_detail", comment.answer.question.id)
            return redirect(
                "{}#comment_{}".format(
                    resolve_url("board:question_detail", comment.answer.question.id),
                    comment.id,
                )
            )
    else:
        form = CommentForm(instance=comment)

    return render(request, "board/comment_form.html", {"form": form})


@login_required(login_url="common:login")
def comment_delete_answer(request, cid):
    comment = get_object_or_404(Comment, id=cid)
    comment.delete()
    return redirect("board:question_detail", comment.answer.question.id)


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
