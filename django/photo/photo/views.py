from django.shortcuts import render, redirect, get_object_or_404
from .models import Photo
from .forms import PhotoForm


# Create your views here.
def list(request):
    photos = Photo.objects.all()
    return render(request, "photo/photo_list.html", {"photos": photos})


def create(request):

    if request.method == "POST":
        form = PhotoForm(request.POST)
        if form.is_valid():  # 유효성 검증(모델에 정의된 규칙에 따라)
            form.save()  # model.save()까지 자동 호출됨
            return redirect("photo_list")
    else:
        form = PhotoForm()

    return render(request, "photo/photo_create.html", {"form": form})


def detail(request, id):
    photo = get_object_or_404(Photo, id=id)
    return render(request, "photo/photo_detail.html", {"photo": photo})


def remove(request, id):
    photo = get_object_or_404(Photo, id=id)
    photo.delete()

    return redirect("photo_list")


def edit(request, id):
    photo = get_object_or_404(Photo, id=id)

    if request.method == "POST":
        # request.POST : 사용자 수정할 입력값
        # instance=photo : 원본 내용
        form = PhotoForm(request.POST, instance=photo)
        if form.is_valid():
            form.save()
            return redirect("photo_detail", id=id)
    else:
        # 특정 photo객체와 연결시켜 같이 보내기
        form = PhotoForm(instance=photo)

    return render(request, "photo/photo_edit.html", {"form": form})
