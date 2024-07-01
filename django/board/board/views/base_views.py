from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from board.models import Question
from django.core.paginator import Paginator
from django.db.models import Q, Count  # or 조건으로 데이터 조회


def question_list(request):
    """전체 질문 추출"""

    # 현재 페이지 번호 가져오기
    page = request.GET.get("page", 1)

    # 검색어
    keyword = request.GET.get("keyword", "")

    # 정렬기준
    so = request.GET.get("so", "recent")

    # question_list = Question.objects.all()
    # question_list = Question.objects.order_by("-created_at")

    if so == "recommend":
        # 테이블에 num_voter 이름으로 임시 컬럼 생성
        question_list = Question.objects.annotate(num_voter=Count("voter")).order_by(
            "-num_voter", "-created_at"
        )
    elif so == "popular":  # 답변수
        question_list = Question.objects.annotate(num_answer=Count("answer")).order_by(
            "-num_answer", "-created_at"
        )
    else:
        question_list = Question.objects.order_by("-created_at")

    if keyword:
        question_list = question_list.filter(
            Q(subject__icontains=keyword)
            | Q(content__icontains=keyword)
            # username : User객체의 아이디
            | Q(author__username__icontains=keyword)
            | Q(answer__author__username__icontains=keyword)
        ).distinct()

    paginator = Paginator(question_list, 10)
    page_obj = paginator.get_page(page)

    context = {"question_list": page_obj, "page": page, "keyword": keyword, "so": so}
    return render(request, "board/question_list.html", context)


def question_detail(request, qid):
    # 현재 페이지 번호 가져오기
    page = request.GET.get("page", 1)

    # 검색어
    keyword = request.GET.get("keyword", "")

    # 정렬기준
    so = request.GET.get("so", "recent")
    question = get_object_or_404(Question, id=qid)
    context = {"question": question, "page": page, "keyword": keyword, "so": so}
    return render(request, "board/question_detail.html", context)
