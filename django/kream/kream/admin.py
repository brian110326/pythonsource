from django.contrib import admin
from .models import Product, Trade_Total, Check_List


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name_kor", "product_detail_url")
    list_display_links = ["name_kor"]
    search_fields = ["name_kor"]


admin.site.register(Product, ProductAdmin)
admin.site.register(Trade_Total)
admin.site.register(Check_List)
