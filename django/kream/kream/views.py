from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from django.contrib.auth.decorators import login_required
from .models import Product, Trade
from django.db.models import Sum


# Create your views here.
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


def home(request):
    # 전체 매출액
    # select sum(total_sales) from Trade group by product
    total_sales_per_product = Trade.objects.values("product").annotate(
        total_sales=Sum("total_sales")
    )
    total_sales_sum = sum(item["total_sales"] for item in total_sales_per_product)

    # 년도마다 매출액 비교
    # select sum(total_sales) from Trade group by trade_year
    total_sales_per_year = Trade.objects.values("trade_year").annotate(
        total_sales=Sum("total_sales")
    )

    # <QuerySet [{'trade_year': 2022, 'total_sales': 1176912}, {'trade_year': 2023, 'total_sales': 799145}, {'trade_year': 2024, 'total_sales': 2699080}]>
    # total_sales_per_year = total_sales_per_year[0].get("total_sales")

    for i in range(total_sales_per_year.__len__()):
        total_sales_sum_per_year = total_sales_per_year[i].get("total_sales")

    total_latest = total_sales_per_year[total_sales_per_year.__len__() - 1].get(
        "trade_year"
    )
    total_2023 = total_sales_per_year[total_sales_per_year.__len__() - 2].get(
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
    total_sales_per_month = Trade.objects.values("trade_year", "trade_month").annotate(
        total_sales=Sum("total_sales")
    )

    # trade_year가 가장 최신년도인 항목만 필터링
    latest_year_data = [
        data for data in total_sales_per_month if data["trade_year"] == total_latest
    ]

    latest_year_months = [data["trade_month"] for data in latest_year_data]
    latest_year_months_data = [data["total_sales"] for data in latest_year_data]

    return render(
        request,
        "kream/home.html",
        {
            "total_sales": total_sales_sum,
            "count_year": count_year,
            "year": year,
            "latest_year_months": latest_year_months,
            "latest_year_months_data": latest_year_months_data,
        },
    )
