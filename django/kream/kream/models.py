from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):
    brand = models.CharField(max_length=30)
    name_kor = models.CharField(max_length=30)
    name_eng = models.CharField(max_length=30)
    model_no = models.CharField(max_length=20)
    release_date = models.CharField(max_length=20)
    color = models.CharField(max_length=10)
    original_price = models.IntegerField(default=0)
    img_url = models.CharField(max_length=200)
    product_detail_url = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name_kor


class Trade(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    trade_year = models.IntegerField(default=0)
    trade_month = models.IntegerField(default=0)
    trade_size = models.CharField(max_length=10)
    total_sales = models.IntegerField(default=0)
    average_sales = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    monthly_sales = models.IntegerField(default=0)
    yearly_sales = models.IntegerField(default=0)
    size_sales = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.product.name_kor


class Trade_Total(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    trade_size = models.CharField(max_length=10)
    trade_price = models.IntegerField(default=0)
    trade_year = models.IntegerField(default=0)
    trade_month = models.IntegerField(default=0)
    trade_hour = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.product.name_kor
