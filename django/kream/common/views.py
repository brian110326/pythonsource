from django.shortcuts import render, redirect
from .forms import UserForm
from django.shortcuts import render, get_object_or_404
from .models import Profile


def register(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("common:login")

    else:
        form = UserForm()

    return render(request, "common/register.html", {"form": form})


def profile(request):
    user = request.user

    if request.method == "POST":
        user.first_name = request.POST.get("first_name")
        user.last_name = request.POST.get("last_name")
        user.tel = request.POST.get("tel")
        user.address = request.POST.get("address")
        user.email = request.POST.get("email")

        user.save()

        return redirect("common:profile")

    return render(request, "common/profile.html")
