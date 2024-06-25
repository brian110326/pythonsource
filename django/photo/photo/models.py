from django.db import models


# Create your models here.
class Photo(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    image = models.CharField(max_length=200)

    # TextField() => textarea 태그로 받기 위해서
    description = models.TextField()
    price = models.IntegerField()
