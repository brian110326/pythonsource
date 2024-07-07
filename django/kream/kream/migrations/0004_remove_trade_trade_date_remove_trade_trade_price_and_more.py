# Generated by Django 5.0.6 on 2024-07-07 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kream', '0003_product_original_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trade',
            name='trade_date',
        ),
        migrations.RemoveField(
            model_name='trade',
            name='trade_price',
        ),
        migrations.AddField(
            model_name='trade',
            name='average_sales',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name='trade',
            name='monthly_sales',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trade',
            name='size_sales',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trade',
            name='total_sales',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trade',
            name='trade_month',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trade',
            name='trade_year',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trade',
            name='yearly_sales',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='trade',
            name='trade_size',
            field=models.CharField(max_length=10),
        ),
    ]
