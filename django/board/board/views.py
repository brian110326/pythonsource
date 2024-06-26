from django.shortcuts import render, get_object_or_404, redirect
from .models import Question, Answer
from .forms import QuestionForm, AnswerForm

from django.core.paginator import Paginator

# Create your views here.


def question_list(request):
    # 전체 질문 추출

    # 현재 페이지 정보 가져오기
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


# def answer_create(request, qid):
#     question = get_object_or_404(Question, id=qid)
#     # answer = Answer.objects.create(
#     #     question=question, content=reqeust.POST.get("content")
#     # )

#     # question.answer_set.create(content=reqeust.POST.get("content"))

#     answer = Answer(question=question, content=request.POST.get("content"))
#     answer.save()

#     # app_name 붙이기
#     return redirect("board:question_detail", qid=qid)


def question_create(request):
    if request.method == "POST":
        form = QuestionForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("board:question_list")
    else:
        form = QuestionForm()
    return render(request, "board/question_form.html", {"form": form})


def answer_create(request, qid):
    question = Question.objects.get(id=qid)

    if request.method == "POST":
        form = AnswerForm(request.POST)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.question = question
            answer.save()
            return redirect("board:question_detail", qid=qid)
    else:
        form = AnswerForm()

    # 실패 시 get 방식으로 해결
    # 실패 시 다시 detail 페이지로 가지만 form에대한 정보와 question의 id도 같이 보내줘야함
    context = {"question": question, "form": form}
    return render(request, "board/question_detail.html", context)
