# Generated by Django 5.0.6 on 2024-07-11 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kream', '0014_remove_check_list_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='check_list',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='image'),
        ),
    ]
