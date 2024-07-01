from django.shortcuts import render, get_object_or_404, redirect, resolve_url
from .models import Post
from .forms import PostForm
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator


# Create your views here.
def list(request):
    page = request.GET.get("page", 1)
    post_list = Post.objects.all()
    paginator = Paginator(post_list, 5)
    page_obj = paginator.get_page(page)
    return render(request, "blog/list.html", {"post_list": page_obj})


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
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect("blog:detail", post.id)
    else:
        form = PostForm(instance=post)

    return render(request, "blog/modify.html", {"form": form, "post": post})


def delete(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.delete()
    return redirect("blog:list")
