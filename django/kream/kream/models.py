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
    img_url = models.CharField(max_length=200)
    product_detail_url = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name_kor


class Trade(models.Model):
    name_kor = models.CharField(max_length=30)
    trade_date = models.CharField(max_length=30)
    trade_size = models.CharField(max_length=30)
    trade_price = models.IntegerField()

    def __str__(self) -> str:
        return self.name_kor
