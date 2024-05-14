# dictionary ==> Map
# list와 같이 자주 쓰이는 자료형
# key, value
# {}

# %%
# 생성
dict1 = {}
dict2 = {"name": "Song", "age": 12}
dict3 = {0: "Hello Pyhton", 1: "Hello Coding"}
dict4 = {"arr": [1, 2, 3, 4, 5]}

# %%
print(dict2)
print(dict3)
print(dict4)

# %%
# 특정 key의 요소 출력
print(dict2["name"])
print(dict3[0])
print(dict4["arr"])

# %%
# dict1["addr"] : KeyError

# %%
# key가 없어도 error 발생 X
dict1.get("addr")

# %%
# 데이터 추가 - key : value 형태로 추가
dict2["birth"] = "0514"
print(dict2)

# %%
dict3[2] = ["Hello Java", "Hello Oracle"]
print(dict3)

# %%
dict4["rank"] = (16, 17, 18)
print(dict4)

# %%
counter = {}
numbers = [1, 2, 5, 6, 3, 7, 8, 9, 1, 3, 5, 2, 6, 7, 4, 7]
for i in numbers:
    counter[i] = numbers.count(i)
print(counter)

# %%
# 삭제
del dict2["birth"]
print(dict2)

# %%
# 1) keys()
print(dict2.keys())

# %%
# 2) values()
print(dict2.values())

# %%
# 3) items() : key, value 쌍으로
print(dict2.items())

# %%
for k in dict2.keys():
    print(k)

# %%
for k, v in dict2.items():
    print(k, v)

# %%
# in : key값이 있는지 확인
"name" in dict1

# %%
"name" in dict2

# %%
# clear() : key, value 전체 제거
dict2.clear()
print(dict2)

# %%
q1 = {"봄": "딸기", "여름": "토마토", "가을": "사과", "겨울": "귤"}
print(q1.get("가을"))

print("사과" in q1.values())

for k in q1.keys():
    if k == "가을":
        print(q1.get(k))

str = "사과 포함" if "사과" in q1.values() else "사과포함X"
print(str)

# %%
