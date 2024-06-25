from django.db import models


# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    # auto_now_add : 새 글 등록 시 자동으로 현재 날짜 추가됨
    created_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    important = models.BooleanField(default=False)

    # java의 tostring 역할
    def __str__(self) -> str:
        return self.title
