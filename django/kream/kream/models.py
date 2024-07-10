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


class Trade_Total(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    trade_size = models.CharField(max_length=10)
    trade_price = models.IntegerField(default=0)
    trade_year = models.IntegerField(default=0)
    trade_month = models.IntegerField(default=0)
    trade_hour = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.product.name_kor


class Check_List(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, default="default_title")
    content = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    is_completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return "%s - %s" % (self.id, self.user)
