from django.shortcuts import render
from .forms import UserForm
from django.contrib.auth import authenticate, login, logout

# Create your views here.


def index(request):
    return render(request, "index.html")


def register(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = UserForm()

    return render(request, "register.html", {"form": form})


def common_login(request):
    if request.method == "POST":
        # 입력값 가져오기
        username = request.POST.get("username")
        password = request.POST.get("password")

        # db에 들어가서 확인하는 과정
        user = authenticate(request, username, password)

        if user is not None:
            login(request, user)

    return render(request, "login.html")
