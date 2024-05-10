# %%
# 문자 처리
# 문자, 문자열 처리 구분 X
"Life is too short, You need Python"
"Life is too short, You need Python"

# %%
multiline = """
    Life is too short
    You need Python
"""
multiline

# %%
str1 = "Python" + " is fun"
str1

# %%
# * : 문자열 반복
str2 = "Python" * 2
str2

# %%
# 문자열 인덱싱과 슬라이싱
print((str1[3]))
print((str1[5]))
# 오른쪽에서 인덱싱
print((str1[-1]))

# %%
# 슬라이싱 : [시작위치 : 끝위치] ==> 끝위치 포함 X
str1 = "Life is too short"
print(str1[0:])
print(str1[0:4])
print(str1[4:])
print(str1[4:8])
print(str1[:17])
print(str1[0:-4])

# %%
# 길이 함수
len(str1)

# %%
