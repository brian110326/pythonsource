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
str1 = "파이썬프로그래밍"
for s in str1:
    print(s + "♥", end="")

# %%
# 문자열 함수
# 1) count() : 문자열에 포함된 특정 문자열 개수
str1 = "hobby"
print("a 문자열에 포함된 b개수 %d" % str1.count("b"))


# %%
# 2) find() : 문자열의 위치
str1 = "Python is the best choice"
print("a 문자열에 b 위치 %d" % str1.find("b"))
print("a 문자열에 b 위치 {}".format(str1.find("b")))
print(f"a 문자열에 b 위치 {str1.find("b")}")

# %%
# 3) index() : 문자열 위치
print("a 문자열에 b 위치 %d" % str1.index("b"))

# %%
# find() vs index()
# 못찾으면 -1 반환
print("a 문자열에 b 위치 %d" % str1.find("K"))

# 못찾으면 error 발생(ValueError)
# print("a 문자열에 b 위치 %d" % str1.index("K"))

# %%
# 4) startswith / endswith
str2 = "Python Is Easy Programming"
print(str2.startswith("P"))
print(str2.endswith("P"))

# %%
# 5) join()
print(",".join("abcdefg"))
# list, tuple 문자열로 변경할때 주로 사용
list1 = ["a","b","c","d","e"]
print("".join(list1))

# %%
# 6) upper / lower / swapcase / title : 대소문자 변환
a = "abcde"
print("소문자 => 대문자 ", a.upper())

a = "ABCDE"
print("대문자 => 소문자 ", a.lower())

a = "Python is Easy"
print("대문자 소문자 상호 변환 ", a.swapcase())

a = "python is easy"
print("단어의 제일 앞 글자만 대문자 변환 ", a.title())

# %%
# python 대소문자 구별 함
"abc" == "ABC"

# %%
# 7) lstrip / rstrip / strip : 공백제거
a = "          hi"
print(a)
print(a.lstrip())

a = "hi                "
print(a)
print(a.rstrip())

a = "               hi                "
print(a)
print(a.strip())

# %%
