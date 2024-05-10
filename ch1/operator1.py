# 연산자
a, b = 5, 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)  # 1.6666666666666667
print(a // b)  # 몫 계산
print(a % b)  # 나머지
print(a**b)  # 거듭제곱

# 대입연산자
a += 5
print(a)

a *= 5
print(a)

a -= 5
print(a)

# 동전교환
money, c500, c100, c50, c10 = 0, 0, 0, 0, 0
money = 7777

c500 = money // 500
money %= 500
c100 = money // 100
money %= 100
c50 = money // 50
money %= 50
c10 = money // 10
money %= 10

print(
    "500원 : %d개, 100원 : %d개, 50원 : %d개, 10원 : %d개, 나머지 돈 : %d원"
    % (c500, c100, c50, c10, money)
)

# 관계연산자
# <,>,>=,<=,==,!=
a, b = 10, 0
print(a == b)
print(a != b)
print(a >= b)
print(a <= b)

# 논리연산자
# and, or, not
a, b, c = 100, 80, 130
print("논리연산자")
print("and : ", a > b and b > c)
print("or : ", a > b or b > c)
print("not : ", not b > c)
print("not : ", not False)
print("not : ", not True)

# 삼항연산자는 없음
# 참일때 if 조건 else 거짓일때
str = "안녕하세요" if True else "반갑습니다"
print(str)
