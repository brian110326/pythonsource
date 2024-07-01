from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from .models import Post
from .forms import PostForm
from django.contrib.auth.decorators import login_required


# Create your views here.
def list(request):
    post_list = Post.objects.all()
    return render(request, "blog/list.html", {"post_list": post_list})


def detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, "blog/post.html", {"post": post})


@login_required(login_url="common:login")
def create(request):
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect("blog:list")
    else:
        form = PostForm()

    return render(request, "blog/create.html", {"form": form})


@login_required(login_url="common:login")
def modify(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            pass
    else:
        form = PostForm(instance=post)

    return render(request, "blog/modify.html", {"form": form})
