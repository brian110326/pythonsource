# tuple : ()
# tuple은 요소값을 바꿀 수 없다(sort, remove, insert, pop 같은 메소드 X)
# 나머지는 list와 유사

# %%
# 생성
t1 = ()
t2 = (1,)  # 요소가 1개일때에도 쉼표를 꼭 붙여야함
t3 = (1, 2, 3)
t4 = 1, 2, 3  # 소괄호 생략 가능
t5 = ("a", "b", ("ab", "cd"))

# %%
print(t2)
print(t3)
print(t4)
print(t5)

# %%
# del t3[0]

# %%
# t3[0] = 6

# %%
t3[1]

# %%
t3[1:]

# %%
t6 = t2 + t3
print(t6)

# %%
t6 = t3 * 3
print(t6)

# %%
len(t6)

# %%
