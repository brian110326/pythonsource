from django.shortcuts import render, get_object_or_404, redirect
from .models import Question, Answer
from .forms import QuestionForm, AnswerForm, CommentForm

from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.utils import timezone


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
            return redirect("board:question_detail", qid=qid)
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
            return redirect("board:question_detail", qid=answer.question.id)

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
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = CommentForm()

    return render(request, "board/comment_form.html", {"form": form})


@login_required(login_url="common:login")
def comment_modify_question(request, cid):
    pass


@login_required(login_url="common:login")
def comment_delete_question(request, cid):
    pass


@login_required(login_url="common:login")
def comment_create_answer(request, aid):
    pass


@login_required(login_url="common:login")
def comment_modify_answer(request, cid):
    pass


@login_required(login_url="common:login")
def comment_delete_answer(request, cid):
    pass
