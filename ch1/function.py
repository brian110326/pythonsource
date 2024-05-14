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
