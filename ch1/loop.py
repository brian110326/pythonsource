# %%
# while / for문
i = 1
while i < 11:
    print(i)
    i += 1
    # i++ 안됨

# %%
i = 1
while i < 101:
    if i % 2 == 0:
        print(i, end=" ")
    i += 1

# %%
i = 1
sum1 = 0
while i < 101:
    sum1 += i
    i += 1
print(sum1)
# sum함수가 있어서 변수명은 sum X

# %%
i = 1
while i < 10:
    print("6 X %d = %2d" % (i, 6 * i))
    i += 1

# %%
while True:
    str = input("입력 : ")
    if str == "q":
        break
    print(str)


# %%
print(list(range(5)))
print(list(range(1, 5, 2)))

# %%
i = 10
i + 1

# %%
for i in range(11):
    print(i)

# %%
for i in range(1, 11):
    print(i)

# %%
for i in range(1, 101, 2):
    print(i, end=" ")

# %%
sum1 = 0
for i in range(1, 101):
    sum1 += i
print(sum1)

# %%
# sum()
print(sum(range(1, 101)))


# %%
range(10, 1)
print(list(range(10, 1, -1)))

# %%
num = int(input("숫자 입력 : "))
print(sum(range(1, num + 1)))

# %%
