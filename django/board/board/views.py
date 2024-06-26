from django.shortcuts import render, get_object_or_404, redirect
from .models import Question, Answer

# Create your views here.


def question_list(request):
    # 전체 질문 추출
    # question_list = Question.objects.all()
    question_list = Question.objects.order_by("-created_at")
    context = {"question_list": question_list}
    return render(request, "board/question_list.html", context)


def question_detail(reqeust, qid):
    question = get_object_or_404(Question, id=qid)
    context = {"question": question}
    return render(reqeust, "board/question_detail.html", context)


def answer_create(reqeust, qid):
    question = get_object_or_404(Question, id=qid)
    # answer = Answer.objects.create(
    #     question=question, content=reqeust.POST.get("content")
    # )

    # question.answer_set.create(content=reqeust.POST.get("content"))

    answer = Answer(question=question, content=reqeust.POST.get("content"))
    answer.save()

    # app_name 붙이기
    return redirect("board:question_detail", qid=qid)
