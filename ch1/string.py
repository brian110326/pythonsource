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
str2 = "20240510Sunny"
date = str2[0:8]
print(date)

weather = str2[-5:]
print(weather)

year = date[:4]
month = date[4:6]
day = date[6:]
print(year, month, day, sep="-")

# %%
id = "987653-1344234"
# 주민등록번호 1 or 3 : 남자, 2 or 4 : 여자
str = int(id[7])
print(str)
if str == 1 or str == 3:
    print("Male")
elif str == 2 or str == 4:
    print("Female")

# %%
