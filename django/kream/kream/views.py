from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.http import JsonResponse


# Create your views here.
def home(request):
    return render(request, "kream/admin_home.html")
