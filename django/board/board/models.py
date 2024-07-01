from django.db import models
from django.contrib.auth.models import User

# auto_now_add : 가장 처음 삽입시에만 날짜와 시간 삽입
# auto_now : 수정할 때마다 날짜와 시간 변경


class Question(models.Model):
    subject = models.CharField(max_length=200, verbose_name="제목")
    content = models.TextField(verbose_name="내용")
    # CASCADE : author 삭제 시 Question도 같이 삭제
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="작성일시")
    modified_at = models.DateTimeField(null=True, blank=True, verbose_name="수정일시")

    # N:M 관계
    # User 입장에서 접근할수있는 컬럼이 2개...(voter, author) => 혼동 방지용으로 정확한 명칭을 부여
    voter = models.ManyToManyField(User, related_name="voter_question")

    view_cnt = models.BigIntegerField(default=0)

    def __str__(self):
        return self.subject


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField(verbose_name="내용")
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="작성일시")
    modified_at = models.DateTimeField(null=True, blank=True, verbose_name="수정일시")
    voter = models.ManyToManyField(User, related_name="voter_answer")

    def __str__(self):
        return self.content


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(verbose_name="내용")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="작성일시")
    modified_at = models.DateTimeField(null=True, blank=True, verbose_name="수정일시")

    # 댓글이 q댓글인지 a댓글인지 비어있을수있기때문에(q댓글이면 a댓글이 아님)
    question = models.ForeignKey(
        Question, on_delete=models.CASCADE, null=True, blank=True
    )
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, null=True, blank=True)


class QuestionCount(models.Model):
    ip = models.CharField(max_length=30)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __unique__(self):
        return self.ip
