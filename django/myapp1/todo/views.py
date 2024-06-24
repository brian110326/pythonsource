from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def list(request):
    return HttpResponse("Hello")


def list(request):
    # html 응답
    return render(request, "todo/todo_list.html")
