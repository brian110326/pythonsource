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

    # 최신년도 총 매출액
    total_2024 = total_sales_per_year[total_sales_per_year.__len__() - 1].get(
        "total_sales"
    )
    total_2023 = total_sales_per_year[total_sales_per_year.__len__() - 2].get(
        "total_sales"
    )

    # 월마다 총 매출액

    return render(
        request,
        "kream/home.html",
        {
            "total_sales": total_sales_sum,
        },
    )
