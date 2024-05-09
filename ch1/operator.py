# 연산자
a,b = 5,3
print(a+b)
print(a-b)
print(a*b)
print(a/b) #1.6666666666666667
print(a//b) #몫 계산
print(a%b) #나머지
print(a**b) #거듭제곱

#대입연산자
a += 5
print(a)

a *= 5
print(a)

a -= 5
print(a)

# 동전교환
money, c500, c100, c50, c10 = 0,0,0,0,0
money = 7777

c500 = money//500
print(c500)
money //= 500

