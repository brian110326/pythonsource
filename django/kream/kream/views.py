from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from django.contrib.auth.decorators import login_required
from .models import Product, Trade
from django.core.paginator import Paginator
from django.http import JsonResponse


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
    return render(request, "kream/home.html")
