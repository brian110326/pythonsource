from django.shortcuts import render, get_object_or_404
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
