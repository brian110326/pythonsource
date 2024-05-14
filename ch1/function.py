# 함수
# def 함수명(매개변수):
#     수행할문장1
#     수행할문장2


# %%
def hello():
    print("Hello!@")


hello()


# %%
def add(a, b):
    return a + b


add(4, 5)


# %%
# 기본값 부여 : 값이 넘어오지 않는 경우 사용
def sub(a, b=3):
    return a - b


print(sub(9, 5))
print(sub(9))


# %%
# 가변 : 입력값이 몇개가 될지 모르는 경우 사용
#        입력값을 모아서 tuple로 만들어줌
def add_many(*args):
    print(args)


add_many(1, 2, 3)
add_many(1, 2, 3, 4, 5, 6, 7)
add_many("35", "24", "45", "99")
add_many({"dessert": "macaroon", "wine": "marlot"})


# %%
def add_many(*args):
    result = 0
    for i in args:
        result += i
    return result


print(add_many(1, 2, 3))
print(add_many(1, 2, 3, 4, 5, 6, 7, 8, 9))


# %%
# 가변 parameter와 일반 parameter를 같이 쓸때 가변 parameter를 맨 뒤에 선언
def add_many(choice, *args):
    if choice == "add":
        result = 0
        for i in args:
            result += i

    elif choice == "mul":
        result = 1
        for i in args:
            result *= i

    return result


print(add_many("add", 1, 2, 3))
print(add_many("mul", 1, 2, 3, 4, 5, 6, 7))


# %%
# keyword parameter : kwargs
# : 입력값을 모아서 dictionary로 만들어줌
def print_kwargs(**kwargs):
    print(kwargs)


print_kwargs(name="foo", age=3)
print_kwargs(name="foo", age=3, addr="seoul")


# %%
# 일반, 가변, 키워드 다 섞이는 경우
def print_kwargs(arg1, arg2, *args, **kwargs):
    print(arg1, arg2, args, kwargs)


print_kwargs(1, 2)
print_kwargs(1, 2, "park", "kim")
print_kwargs(1, 2, "park", "kim", age=25, name="choi")


# %%
# 함수의 return값 : 여러개일 경우 묶어서 tuple로 return
def add_and_mul(a, b):
    return a + b, a * b


print(add_and_mul(3, 4))

hap, mul = add_and_mul(5, 6)
print(hap, mul)


# %%
def func_mul(x):
    y1 = x * 100
    y2 = x * 200
    y3 = x * 300
    return [y1, y2, y3]


print(func_mul(100))


# %%
def say_nick(nick):
    if nick == "바보":
        return
    print(f"나의 별명은 {nick}입니다")


say_nick("바보")
say_nick("a")


# %%
def four_rules(a, b, op):
    if op == "+":
        result = a + b
    elif op == "-":
        result = a - b
    elif op == "*":
        result = a * b
    elif op == "/":
        result = a / b
    return result


num1 = int(input("숫자1 입력: "))
num2 = int(input("숫자2 입력: "))
op = input("연산자 입력 : ")
print(four_rules(num1, num2, op))


# %%
a = 1


def vartest(a):
    a = a + 1


vartest(a)
print(a)

# %%
a = 1


def vartest(a):
    a = a + 1
    return a


a = vartest(a)
print(a)

# %%
a = 1


def vartest():
    global a
    a = a + 1
    return a


vartest()
print(a)


# %%
# 1~100 소수에 해당하는 숫자
# 2,3,5,7,11,13...
primes = []


def isPrime(x):
    cnt = 0
    for i in range(1, x + 1):
        if x % i == 0:
            cnt += 1
    if cnt == 2:
        primes.append(x)


for j in range(1, 101):
    isPrime(j)
print(primes)

# %%
