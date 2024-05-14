# set(집합)
# 중복 허용 X
# 순서 X : 인덱싱 불가능

# %%
# set 생성
set1 = set()
set2 = set([1, 2, 3, 4])
set3 = set([1, 4, 5, 6, 6])

# %%
print(set2)
print(set3)

# %%
# 리스트나 튜플로 변환 : 인덱싱 필요시
# list(), tuple()
list1 = list(set2)
t1 = tuple(set3)

print(list1)
print(t1)

# %%
set4 = set("abcdefg")
print(set4)

# %%
dict1 = {"no": 1, "name": "hong", "age": 25}
# dict => set : key값만 가져옴
set(dict1)

# %%
list1 = [1, 2, 3, 4, 5]
set(list1)

# %%
# 교집합, 합집합, 차집합
s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

# 교집합
print(s1 & s2)
print(s1.intersection(s2))

# 합집합
print(s1 | s2)
print(s1.union(s2))

# 차집합
print(s1 - s2)
print(s1.difference(s2))

# %%
# add() : 1개만 추가
s1.add(7)
print(s1)

# %%
# update() : 여러개 추가하기
s1.update([9, 10, 11])
print(s1)

# %%
# remove() : 제거
s1.remove(2)
print(s1)

# %%
