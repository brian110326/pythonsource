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
