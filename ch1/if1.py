# %%
if True:
    print("True")

# %%
a = 200
# a가 100~200
if a > 100 and a <= 200:
    print(a)

# %%
if 100 < a <= 200:
    print(a)

# %%
a, b, c = 12, 6, 18
max = a
if max < b:
    max = b
if max < c:
    max = c

print(max)

# %%
if True:
    print("True")
else:
    print("False")

# %%
score, grade = 90, "A"
if score >= 90 and grade == "A":
    print("합격")
else:
    print("불합격")

# %%
num = int(input("숫자 입력 : "))
if num % 2 == 0:
    print("%d : 짝수" % num)
else:
    print("%d : 홀수" % num)

# %%
# 중첩 if
a = 75
if a > 50:
    if a < 100:
        print(a)
    else:
        print("100보다 큼")
else:
    print("50보다 작음")

# %%
# 다중 if ==> switch문 X
# elif
num = 90
if num >= 90:
    print("A")
elif num >= 80:
    print("B")
elif num >= 70:
    print("C")
else:
    print("D")

# %%
age = int(input("나이 입력 : "))
height = int(input("키 입력 : "))
if age >= 20 and height >= 170:
    print("A지망 지원 가능")
elif age >= 20 and height >= 160:
    print("B지망 지원 가능")
elif age >= 20 and height < 160:
    print("지원 불가")
else:
    print("20세 이상 지원 가능")

# %%
score = int(input("점수 입력 : "))
if 81 <= score <= 100:
    print("A")
elif 61 <= score <= 80:
    print("B")
elif 41 <= score <= 60:
    print("C")
elif 21 <= score <= 40:
    print("D")
else:
    print("E")

# %%
num1 = int(input("숫자1 입력 : "))
num2 = int(input("숫자2 입력 : "))
op = input("연산자 입력 : ")

if op == "+":
    result = num1 + num2
elif op == "-":
    result = num1 - num2
elif op == "*":
    result = num1 * num2
elif op == "/":
    result = num1 / num2
elif op == "//":
    result = num1 // num2
elif op == "**":
    result = num1**num2
elif op == "%":
    result = num1 % num2

print(f"{num1} {op} {num2} = {result}")

# %%
