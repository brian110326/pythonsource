from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from django.contrib.auth.decorators import login_required
from .models import Product, Trade, Trade_Total
from django.db.models import Sum, Case, When, IntegerField, Count


# Create your views here.
@login_required(login_url="common:login")
def detail(request, pid, year):
    single_product = get_object_or_404(Product, id=pid)
    product_list = Product.objects.all()

    # 전체 판매금액과 평균금액은 동일
    trade = Trade.objects.filter(product=single_product, trade_year=year)[0]

    all_trades = Trade.objects.filter(product=single_product)

    return render(
        request,
        "kream/detail.html",
        {
            "product_list": product_list,
            "single_product": single_product,
            "trade": trade,
            "all_trades": all_trades,
            "current_year": year,
        },
    )


@login_required(login_url="common:login")
def list(request):
    return render(request, "kream/list.html")


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

    curr_quarter = [data["quarter"] for data in curr_quarter_total_sales]

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
            "top_time": top_time,
        },
    )
