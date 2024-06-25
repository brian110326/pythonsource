from django import forms
from .models import Photo


# ModelForm : 모델과 연결된 form
# 모델 => 테이블
# 모델과 연결된 : Photo 모델의 필드를 모두 가지고 있다는 뜻
# 모델과 화면단의 form의 중간다리 역할 느낌
class PhotoForm(forms.ModelForm):
    # class Meta : 필수작성(모델 대상이 누군지)
    class Meta:
        model = Photo
        fields = "__all__"
