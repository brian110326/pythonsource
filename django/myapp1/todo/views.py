from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Todo

# Create your views here.


# def list(request):
#     return HttpResponse("Hello")


def list(request):
    # html 응답

    # todo의 객체 전부를 가져오기
    # todos = Todo.objects.all()
    todos = Todo.objects.filter(completed=False)
    return render(request, "todo/todo_list.html", {"todos": todos})


def create(request):
    """
    get/post 둘다 처리
    """
    if request.method == "POST":
        # name값
        title = request.POST.get("title")
        description = request.POST.get("description")
        important = request.POST.get("important")

        print("전송내용 : ", title, description, important)

        if important:
            todo = Todo(title=title, description=description, important=True)
        else:
            todo = Todo(title=title, description=description)

        todo.save()
        # urls.py name값
        return redirect("list")

    return render(request, "todo/todo_create.html")


def read(request, id):
    # todo = Todo.objects.get(id=id)
    todo = get_object_or_404(Todo, id=id)
    return render(request, "todo/todo_detail.html", {"todo": todo})


def done(request, id):
    # 수정할 모델 찾기
    todo = Todo.objects.get(id=id)
    todo.completed = True
    todo.save()

    return redirect("list")


def done_list(request):
    todo = Todo.objects.filter(completed=True)
    return render(request, "todo/done_list.html", {"todo": todo})


def edit(request, id):
    todo = Todo.objects.get(id=id)

    if request.method == "POST":
        description = request.POST.get("description")
        important = request.POST.get("important")

        todo.description = description

        if important:
            todo.important = True
        else:
            todo.important = False
        todo.save()
        return redirect("read", id=id)
    return render(request, "todo/todo_edit.html", {"todo": todo})
