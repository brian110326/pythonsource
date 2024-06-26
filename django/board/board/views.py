from django.shortcuts import render
from .models import Question, Answer

# Create your views here.


def question_list(request):
    # 전체 질문 추출
    question_list = Question.objects.all()
    context = {"question_list", question_list}
    return render(request, "board/question_list.html", context)
