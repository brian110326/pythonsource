#변수

num=1
num="10"
print(num)

a = b = 3
print(a,b)

a,b = 10, 15
print("a = %d, b = %d" %(a,b))

# 2개의 변수에 있는 값 서로 바꾸기
a,b = b,a
print("a = %d, b = %d" %(a,b))

str1 = "Hello"
num1 = str1 + 500
print(num1)