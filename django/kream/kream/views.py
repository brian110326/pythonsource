from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import Product, Trade_Total, Check_List
from django.db.models import Sum, Case, When, IntegerField, Count, Max, Avg, Min
from collections import Counter
from io import BytesIO
from django.core.paginator import Paginator
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import base64
import pandas as pd
import numpy as np
import matplotlib

matplotlib.use("Agg")


# Create your views here.
@login_required(login_url="common:login")
def detail(request, pid, year):
    single_product = get_object_or_404(Product, id=pid)
    product_list = Product.objects.all()

    # 전체 판매금액과 평균금액은 동일
    # trade = Trade.objects.filter(product=single_product, trade_year=year)[0]

    total_sum = Trade_Total.objects.values("product").annotate(
        total_sales=Sum("trade_price")
    )
    # <QuerySet [{'product': 1, 'total_sales': 663678}, {'product': 2, 'total_sales': 718412}, {'product': 3, 'total_sales': 9341}]>

    total_sum_data = [
        data["total_sales"] for data in total_sum if data["product"] == pid
    ]

    filtered_total_sum_data = 0
    filtered_total_avg_data = 0

    if total_sum_data:
        filtered_total_sum_data = total_sum_data[0]
    else:
        total_sum_data = 0

    total_avg = Trade_Total.objects.values("product").annotate(
        avg_sales=Avg("trade_price")
    )
    # <QuerySet [{'product': 1, 'total_sales': 663678}, {'product': 2, 'total_sales': 718412}, {'product': 3, 'total_sales': 9341}]>

    total_avg_data = [data["avg_sales"] for data in total_avg if data["product"] == pid]

    if total_avg_data:
        filtered_total_avg_data = total_avg_data[0]
    else:
        total_avg_data = 0

    # ===============================================================================

    total_sum_year = Trade_Total.objects.values("product", "trade_year").annotate(
        total_sales=Sum("trade_price")
    )

    total_sum_data_curr_year = [
        data["total_sales"]
        for data in total_sum_year
        if data["trade_year"] == year and data["product"] == pid
    ]

    total_sum_data_prev_year = [
        data["total_sales"]
        for data in total_sum_year
        if data["trade_year"] == year - 1 and data["product"] == pid
    ]

    if total_sum_data_curr_year:
        total_sum_data_curr_year = total_sum_data_curr_year[0]
    else:
        total_sum_data_curr_year = 0

    if total_sum_data_prev_year:
        total_sum_data_prev_year = total_sum_data_prev_year[0]
    else:
        total_sum_data_prev_year = 0

    # =====================================================================
    # 년도 선택 항목들
    year_list = Trade_Total.objects.values("product", "trade_year").order_by(
        "-trade_year"
    )
    year_list_data = [data for data in year_list if data["product"] == pid]
    year_list_data = sorted(
        set(data["trade_year"] for data in year_list_data), reverse=True
    )

    # =========================================================================
    # 선그래프 월데이터
    month_list = (
        Trade_Total.objects.values("product", "trade_year", "trade_month")
        .annotate(total_sales=Sum("trade_price"))
        .order_by("trade_month")
    )

    month_list_data = [
        data
        for data in month_list
        if data["product"] == pid and data["trade_year"] == year
    ]

    month_list_data_month = [data["trade_month"] for data in month_list_data]
    month_list_data_sales = [data["total_sales"] for data in month_list_data]

    # ==========================================================================
    # 상품 목록 보여주기(해당 년도만 보여주기)
    product_list = Trade_Total.objects.values("product", "trade_year")
    product_list_data = [
        data
        for data in product_list
        if data["trade_year"] == year and data["product"] != pid
    ]
    product_list_data_pid = set(data["product"] for data in product_list_data)

    products = Product.objects.filter(id__in=product_list_data_pid).values(
        "id", "brand", "name_kor", "model_no", "original_price", "product_detail_url"
    )

    # ==========================================================================
    # 원차트용 사이즈별 판매량
    total_sales_per_size = (
        Trade_Total.objects.values("product", "trade_year", "trade_size")
        .annotate(total_sales=Sum("trade_price"))
        .order_by("trade_size")
    )

    size_list = [
        data["trade_size"]
        for data in total_sales_per_size
        if data["trade_year"] == year and data["product"] == pid
    ]

    size_sales = [
        data["total_sales"]
        for data in total_sales_per_size
        if data["trade_year"] == year and data["product"] == pid
    ]

    # 워드 클라우드
    df = pd.read_excel(
        "C:\\source\\pythonsource\\kream_project\\clean_data\\trade_noun.xlsx"
    )

    product = get_object_or_404(Product, id=pid)

    model_no = product.model_no

    product_data = df[df["Model_No"] == model_no]

    words = product_data["Social_Text"].dropna().to_list()

    wordcloud_image = None

    if words:
        word_counts = Counter(" ".join(words).split())
        wordcloud_image = draw_wordclouds(word_counts)

    return render(
        request,
        "kream/detail.html",
        {
            "product_list": product_list,
            "single_product": single_product,
            "current_year": year,
            "total_sum_data": filtered_total_sum_data,
            "total_avg_data": filtered_total_avg_data,
            "year": year,
            "total_sum_data_curr_year": total_sum_data_curr_year,
            "total_sum_data_prev_year": total_sum_data_prev_year,
            "year_list_data": year_list_data,
            "month_list_data_month": month_list_data_month,
            "month_list_data_sales": month_list_data_sales,
            "products": products,
            "year_list": year_list,
            "pid": pid,
            "size_list": size_list,
            "size_sales": size_sales,
            "wordcloud_image": wordcloud_image,
        },
    )


@login_required(login_url="common:login")
def list(request):
    product_list = Product.objects.all()

    latest_year_per_product = Trade_Total.objects.values("product").annotate(
        max_year=Max("trade_year")
    )
    # <QuerySet [{'product': 1, 'max_year': 2024}, {'product': 2, 'max_year': 2024}, {'product': 3, 'max_year': 2024}]>

    return render(
        request,
        "kream/list.html",
        {
            "product_list": product_list,
            "latest_year_per_product": latest_year_per_product,
        },
    )


@login_required(login_url="common:login")
def home(request):
    # 전체 매출액
    # select sum(total_sales) from Trade group by product
    total_sales_per_product = Trade_Total.objects.values("product").annotate(
        total_sales=Sum("trade_price")
    )
    total_sales_sum = sum(item["total_sales"] for item in total_sales_per_product)

    # 년도마다 매출액 비교
    # select sum(total_sales) from Trade group by trade_year
    total_sales_per_year = Trade_Total.objects.values("trade_year").annotate(
        total_sales=Sum("trade_price")
    )

    # <QuerySet [{'trade_year': 2022, 'total_sales': 1176912}, {'trade_year': 2023, 'total_sales': 799145}, {'trade_year': 2024, 'total_sales': 2699080}]>
    # total_sales_per_year = total_sales_per_year[0].get("total_sales")

    total_sales_sum_per_year = [data["total_sales"] for data in total_sales_per_year]

    # 최신년도
    total_latest = total_sales_per_year[total_sales_per_year.__len__() - 1].get(
        "trade_year"
    )

    # 총 년도의 개수
    count_year = total_sales_per_year.__len__()

    # 최신 년도 값
    year = total_sales_per_year[total_sales_per_year.__len__() - 1].get("trade_year")
    # toLocaleString : 콤마 넣기 (자바스크립트) const formatValue = value.toLocaleString('ko-KR');

    # 월마다 총 매출액
    # select sum(total_sales) from Trade group by trade_month
    # <QuerySet [{'trade_year': 2022, 'trade_month': 3, 'total_sales': 45600}, {'trade_year': 2022, 'trade_month': 5, 'total_sales': 454545}]>
    total_sales_per_month = Trade_Total.objects.values(
        "trade_year", "trade_month"
    ).annotate(total_sales=Sum("trade_price"))

    # 최신 월의 값
    month = total_sales_per_month[total_sales_per_month.__len__() - 1].get(
        "trade_month"
    )

    # 각 년도마다 현재 최신 달
    latest_month_per_year = [
        data for data in total_sales_per_month if data["trade_month"] == month
    ]
    # [{'trade_year': 2023, 'trade_month': 8, 'total_sales': 453}, {'trade_year': 2024, 'trade_month': 8, 'total_sales': 1317098}]

    latest_month_per_year_data = [data["total_sales"] for data in latest_month_per_year]

    # trade_year가 가장 최신년도인 항목만 필터링
    latest_year_data = [
        data for data in total_sales_per_month if data["trade_year"] == total_latest
    ]

    # 최신 년도의 거래된 월들
    latest_year_months = [data["trade_month"] for data in latest_year_data]

    # 월들의 개수
    count_month = latest_year_months.__len__()

    # 최신 년도의 거래된 월마다의 총 매출액
    latest_year_months_data = [data["total_sales"] for data in latest_year_data]

    # 현재 월을 이용하여 현재 분기 계산
    if month in [1, 2, 3]:
        current_quarter = 1
    elif month in [4, 5, 6]:
        current_quarter = 2
    elif month in [7, 8, 9]:
        current_quarter = 3
    elif month in [10, 11, 12]:
        current_quarter = 4

    # 분기별 그룹화
    quarter_group = (
        Trade_Total.objects.annotate(
            quarter=Case(
                When(trade_month__in=[1, 2, 3], then=1),
                When(trade_month__in=[4, 5, 6], then=2),
                When(trade_month__in=[7, 8, 9], then=3),
                When(trade_month__in=[10, 11, 12], then=4),
                output_field=IntegerField(),
            )
        )
        .values("quarter", "trade_year")
        .annotate(total_sales=Sum("trade_price"))
    )

    # 최신년도 현재분기 총매출액
    curr_quarter_total_sales = [
        data
        for data in quarter_group
        if data["trade_year"] == year and data["quarter"] == current_quarter
    ]

    curr_quarter_total_sales_data = [
        data["total_sales"] for data in curr_quarter_total_sales
    ]

    curr_quarter = [data["quarter"] for data in curr_quarter_total_sales][0]

    # 현재가 1분기일때는 작년 4분기와 비교
    if current_quarter == 1:
        prev_quarter_total_sales = [
            data
            for data in quarter_group
            if data["trade_year"] == year - 1 and data["quarter"] == 4
        ]

    # 최신년도 이전분기 총매출액
    prev_quarter_total_sales = [
        data
        for data in quarter_group
        if data["trade_year"] == year and data["quarter"] == current_quarter - 1
    ]

    prev_quarter_total_sales_data = [
        data["total_sales"] for data in prev_quarter_total_sales
    ]

    if curr_quarter_total_sales_data and prev_quarter_total_sales_data:
        curr_total_sales = curr_quarter_total_sales_data[0]
        prev_total_sales = prev_quarter_total_sales_data[0]
        curr_quarter_total_sales_data = curr_quarter_total_sales_data[0]
        sales_difference = curr_total_sales - prev_total_sales
        sales_percentage_change = ((sales_difference) / prev_total_sales) * 100
    else:
        curr_total_sales = prev_total_sales = sales_difference = (
            sales_percentage_change
        ) = None

    # 이번 달 가장 많이 팔린 제품

    top_sales_month = (
        Trade_Total.objects.values("trade_year", "trade_month", "product")
        .annotate(sales_count=Count("*"))
        .order_by("-sales_count")
    )
    # <QuerySet [{'trade_year': 2024, 'trade_month': 3, 'product': 1, 'sales_count': 2}]>

    # 가장 최신 년도와 월 기준
    top_sales_month_latest = [
        data
        for data in top_sales_month
        if data["trade_year"] == year and data["trade_month"] == month
    ]

    top_sales_month_latest_data = [
        {"sales_count": data["sales_count"], "product": data["product"]}
        for data in top_sales_month_latest
    ]

    # 개수가 10개가 안된다면 오류날 가능성 존재
    top_sales_month_latest_data = top_sales_month_latest_data[:10]

    top_sales_month_latest_data_pid = [
        data["product"] for data in top_sales_month_latest_data
    ]

    top_sales_month_latest_data_count = [
        data["sales_count"] for data in top_sales_month_latest_data
    ]
    # [{'sales_count': 3, 'product': 1}, {'sales_count': 2, 'product': 2}, {'sales_count': 1, 'product': 3}]

    # 상위 5개 보여주기 위해서 개수
    count_top_sales = top_sales_month_latest_data.__len__()

    products = Product.objects.values("id", "name_kor")
    proudcts_id = [data["id"] for data in products]
    # <QuerySet [{'id': 1, 'name_kor': '에어포스1 화이트'}]>

    # Product 데이터를 가져와서 ID로 매핑
    products = Product.objects.filter(id__in=top_sales_month_latest_data_pid).values(
        "id", "name_kor"
    )
    product_dict = {product["id"]: product["name_kor"] for product in products}
    # 상품 이름과 거래 개수를 결합
    combined_data = [
        {
            "product_name": product_dict[data["product"]],
            "sales_count": data["sales_count"],
        }
        for data in top_sales_month_latest_data
    ]

    # ====================================================================
    # 시간대별 가장 많이 팔린 제품
    top_time = (
        Trade_Total.objects.values("trade_hour")
        .annotate(hour_count=Count("*"))
        .order_by("-hour_count")
    )
    # <QuerySet [{'trade_hour': 6, 'hour_count': 6}]>

    return render(
        request,
        "kream/home.html",
        {
            "total_sales": total_sales_sum,
            "count_year": count_year,
            "count_month": count_month,
            "year": year,
            "latest_year_months": latest_year_months,
            "latest_year_months_data": latest_year_months_data,
            "total_sales_sum_per_year": total_sales_sum_per_year,
            "latest_month": month,
            "latest_month_per_year_data": latest_month_per_year_data,
            "curr_quarter_total_sales_data": curr_quarter_total_sales_data,
            "curr_quarter": curr_quarter,
            "sales_percentage_change": sales_percentage_change,
            "count_top_sales": count_top_sales,
            "top_sales_month": top_sales_month,
            "products": products,
            "top_sales_month_latest_data_count": top_sales_month_latest_data_count,
            "combined_data": combined_data,
            # ==============================================================
            "top_time": top_time[:10],
            "latest_month_per_year_len": latest_month_per_year.__len__(),
        },
    )


# 워드클라우드 제작 함수
def draw_wordclouds(topic_words):

    wordcloud = WordCloud(
        width=1200,
        height=400,
        background_color=None,  # 배경을 투명하게 설정
        mode="RGBA",
        font_path="C:/NanumGothic.ttf",
        contour_width=0,
        contour_color=None,
        random_state=42,
    ).generate_from_frequencies(topic_words)

    plt.figure(figsize=(14, 10))
    plt.imshow(wordcloud, interpolation="bilinear")

    plt.axis("off")

    # 이미지를 BytesIO에 저장
    buffer = BytesIO()
    plt.savefig(buffer, format="png", bbox_inches="tight")
    buffer.seek(0)

    # 이미지를 base64로 인코딩
    image_base64 = base64.b64encode(buffer.getvalue()).decode()
    return image_base64


@login_required(login_url="common:login")
def wordcloud(request, pid):
    df = pd.read_excel(
        "C:\\source\\pythonsource\\kream_project\\clean_data\\trade_noun.xlsx"
    )

    product = get_object_or_404(Product, id=pid)

    model_no = product.model_no

    product_data = df[df["Model_No"] == model_no]

    words = product_data["Social_Text"].dropna().to_list()

    wordcloud_image = None

    if words:
        word_counts = Counter(" ".join(words).split())
        wordcloud_image = draw_wordclouds(word_counts)

    return render(
        request,
        "kream/wordcloud.html",
        {"wordcloud_image": wordcloud_image, "product": product},
    )


@login_required(login_url="common:login")
def monthList(request):
    dates = (
        Trade_Total.objects.values("trade_year", "trade_month")
        .order_by("-trade_year", "-trade_month")
        .distinct()
    )

    page = request.GET.get("page", 1)
    date_list = dates
    paginator = Paginator(date_list, 7)
    page_obj = paginator.get_page(page)

    # 체크리스트
    check_list = Check_List.objects.all().order_by("-created_at")

    return render(
        request,
        "kream/monthList.html",
        {"dates": page_obj, "check_list": check_list[:10]},
    )


@login_required(login_url="common:login")
def checkList(request):
    check_list = Check_List.objects.all().order_by("-created_at")
    return render(request, "kream/checkList.html", {"check_list": check_list})


@login_required(login_url="common:login")
def checkListDetail(request, cid):
    record = get_object_or_404(Check_List, id=cid)
    return render(request, "kream/checkListDetail.html", {"record": record})


@login_required(login_url="common:login")
def modify(request, cid):
    record = get_object_or_404(Check_List, id=cid)
    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")
        completed = request.POST.get("completed")

        record.user = request.user
        record.title = title
        record.content = content
        record.is_completed = completed

        record.save()

        return redirect("kream:checkListDetail", cid)

    return render(request, "kream/checkListModify.html", {"record": record})


@login_required(login_url="common:login")
def create(request):
    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")

        Check_List.objects.create(title=title, content=content, user=request.user)

        return redirect("kream:checkList")

    return render(request, "kream/checkListCreate.html")


@login_required(login_url="common:login")
def delete(request, cid):
    record = get_object_or_404(Check_List, id=cid)
    record.delete()
    return redirect("kream:checkList")


@login_required(login_url="common:login")
def monthlyReport(request, year, month):
    # select option부분
    options = (
        Trade_Total.objects.values("trade_year", "trade_month")
        .order_by("-trade_year", "-trade_month")
        .distinct()
    )

    # 총 매출액
    total_sales = Trade_Total.objects.values("trade_year", "trade_month").annotate(
        total_sales=Sum("trade_price")
    )

    total_sales_data = [
        data["total_sales"]
        for data in total_sales
        if data["trade_year"] == year and data["trade_month"] == month
    ]

    if total_sales_data:
        total_sales_data = total_sales_data[0]
    else:
        total_sales_data = 0

    # 평균 매출액
    avg_sales = Trade_Total.objects.values("trade_year", "trade_month").annotate(
        avg_sales=Avg("trade_price")
    )

    avg_sales_data = [
        data["avg_sales"]
        for data in avg_sales
        if data["trade_year"] == year and data["trade_month"] == month
    ]

    if avg_sales_data:
        avg_sales_data = avg_sales_data[0]
    else:
        avg_sales_data = 0

    # 해당년도 매출액 차지비율
    # 월매출액 / 해당년도 매출액 * 100
    # 해당년도 매출액
    total_sales_year = Trade_Total.objects.values("trade_year").annotate(
        total_sales=Sum("trade_price")
    )

    total_sales_year_data = [
        data["total_sales"] for data in total_sales_year if data["trade_year"] == year
    ]

    if total_sales_year_data:
        total_sales_year_data = total_sales_year_data[0]
    else:
        total_sales_year_data = 0

    proportion = (total_sales_data / total_sales_year_data) * 100

    # bar chart : 해당 월 top 상품들
    top_products = (
        Trade_Total.objects.values("trade_year", "trade_month", "product")
        .annotate(total_sales=Sum("trade_price"))
        .order_by("total_sales")
    )

    top_products_data = [
        data
        for data in top_products
        if data["trade_year"] == year and data["trade_month"] == month
    ][-5:]

    top_products_data_sales = [data["total_sales"] for data in top_products_data]

    top_products_data_pid = [data["product"] for data in top_products_data]

    products = Product.objects.filter(id__in=top_products_data_pid).values(
        "id", "name_kor"
    )

    products_dict = {product["id"]: product["name_kor"] for product in products}

    ordered_product_names = [products_dict[pid] for pid in top_products_data_pid]

    # 같은 제품들 중 작년것들
    top_products_data_last_year = [
        data["total_sales"]
        for data in top_products
        if data["trade_year"] == year
        and data["trade_month"] == month - 1
        and data["product"] in top_products_data_pid
    ]

    # 1월인 경우 이전달은 작년 12월
    if not top_products_data_last_year:
        top_products_data_last_year = [
            data["total_sales"]
            for data in top_products
            if data["trade_year"] == year - 1
            and data["trade_month"] == 12
            and data["product"] in top_products_data_pid
        ]

    # 특정 월의 특정 시간대
    total_sales_per_time = (
        Trade_Total.objects.values("trade_year", "trade_month", "trade_hour")
        .annotate(total_sales=Sum("trade_price"))
        .order_by("-total_sales")
    )

    total_sales_per_time_data = [
        data
        for data in total_sales_per_time
        if data["trade_year"] == year and data["trade_month"] == month
    ]

    time_list = [data["trade_hour"] for data in total_sales_per_time_data[:5]]
    sales_list = [data["total_sales"] for data in total_sales_per_time_data[:5]]

    # 해당 월 상품 목록
    products_inDate = Trade_Total.objects.values(
        "trade_year", "trade_month", "product"
    ).distinct()

    pid_list = [
        data["product"]
        for data in products_inDate
        if data["trade_year"] == year and data["trade_month"] == month
    ]
    p = Product.objects.filter(id__in=pid_list)

    return render(
        request,
        "kream/monthlyReport.html",
        {
            "month": month,
            "year": year,
            "options": options,
            "total_sales_data": total_sales_data,
            "avg_sales_data": avg_sales_data,
            "proportion": proportion,
            "top_products_data": top_products_data,
            "top_products_data_sales": top_products_data_sales,
            "ordered_product_names": ordered_product_names,
            "top_products_data_last_year": top_products_data_last_year,
            "total_sales_per_time_data": total_sales_per_time_data[:5],
            "time_list": time_list,
            "sales_list": sales_list,
            "products": p,
        },
    )


@login_required(login_url="common:login")
def sizeReport(requesst, pid):
    # 상품 이름
    product = get_object_or_404(Product, id=pid)

    # 사이즈별 평균 거래가(맨위 차트용)
    avg_sales_per_size = (
        Trade_Total.objects.values("product", "trade_size")
        .annotate(avg_sales=Avg("trade_price"))
        .order_by("trade_size")
    )

    size_list = [
        data["trade_size"] for data in avg_sales_per_size if data["product"] == pid
    ]

    sales_list = [
        data["avg_sales"] for data in avg_sales_per_size if data["product"] == pid
    ]

    # boxplot chart용
    # 넘겨주는 것들 : size_list, 최대값, 최소값, 1사분위값, 3사분위값, 중앙값, 평균값
    max_sales = (
        Trade_Total.objects.filter(product_id=pid)
        .values("product", "trade_size")
        .annotate(max_sales=Max("trade_price"))
    )
    max_sales_data = [data["max_sales"] for data in max_sales]

    min_sales = (
        Trade_Total.objects.filter(product_id=pid)
        .values("product", "trade_size")
        .annotate(min_sales=Min("trade_price"))
    )
    min_sales_data = [data["min_sales"] for data in min_sales]

    # 1사분위 : 데이터 오름차순 정렬 후 25%의 값
    # ex) 270사이즈의 매출 정렬
    sales_data = (
        Trade_Total.objects.filter(product_id=pid)
        .values("trade_size", "trade_price")
        .order_by("trade_size", "trade_price")
    )

    # trade_price 값을 정수로 변환
    for item in sales_data:
        item["trade_price"] = int(item["trade_price"])

    # 각 사이즈별로 그룹화
    # ex) 270 : 130000
    grouped_data = {}
    for item in sales_data:
        size = item["trade_size"]
        if size not in grouped_data:
            grouped_data[size] = []
        grouped_data[size].append(item["trade_price"])

    # 각 사이즈별 q1 값 계산
    q1_values = {}
    for size, prices in grouped_data.items():
        q1_values[size] = np.percentile(prices, 25)

    q3_values = {}
    for size, prices in grouped_data.items():
        q3_values[size] = np.percentile(prices, 75)

    median_values = {}
    for size, prices in grouped_data.items():
        median_values[size] = np.percentile(prices, 50)

    # 평균값
    sales_mean = (
        Trade_Total.objects.filter(product_id=pid)
        .values("product", "trade_size")
        .annotate(mean_sales=Avg("trade_price"))
        .order_by("trade_size")
    )

    sales_mean_data = [data["mean_sales"] for data in sales_mean]

    # 거래된 사이즈 수
    size_count = (
        Trade_Total.objects.filter(product_id=pid)
        .values("product", "trade_size")
        .distinct()
        .annotate(size_count=Count("trade_size"))
    ).order_by("-size_count")

    return render(
        requesst,
        "kream/sizeReport.html",
        {
            "pid": pid,
            "product": product,
            "avg_sales_per_size": avg_sales_per_size,
            "size_list": size_list,
            "sales_list": sales_list,
            "q1": q1_values,
            "q3": q3_values,
            "median": median_values,
            "max_sales_data": max_sales_data,
            "min_sales_data": min_sales_data,
            "sales_mean_data": sales_mean_data,
            "size_count": size_count[:5],
        },
    )
