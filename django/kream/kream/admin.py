from django.contrib import admin
from .models import Product, Trade


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name_kor", "product_detail_url")
    list_display_links = ["name_kor"]
    search_fields = ["name_kor"]


class TradeAdmin(admin.ModelAdmin):
    list_display = ("name_kor", "trade_date")
    list_display_links = ["name_kor"]
    search_fields = ["name_kor"]


admin.site.register(Product, ProductAdmin)
admin.site.register(Trade, TradeAdmin)
