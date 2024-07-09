from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20, null=True, blank=True)
    last_name = models.CharField(max_length=20, null=True, blank=True)
    tel = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=30, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
