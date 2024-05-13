# %%
# 숫자, 문자열

# 데이터 모임 표현 : list(== ArrayList, 배열), dictionary(== Map), set(== HashSet), tuple
# 다양한 타입 담기 가능

# %%
# 리스트 생성
list1 = []
list2 = [1, 2, 3, 4, 5, 6]
list3 = [1, "a", 3, 4, "b", 6]
list4 = [1, 2, 3, 4, 5, 6, 6.6, 7.8]
list5 = [1, 2, 3, 4, ["Life", "is", "short"]]
list6 = list([3, 4, 5])


# %%
# list 출력
print(list2)

# %%
# list 인덱싱 / 슬라이싱
print(list2[2])
print(list3[-2])
print(list4[-1])
print(list5[-1])
print(list5[4])
print(list5[4][0])
print(list5[4][2])

# %%
list7 = [1, 2, 3, 4, ["a", "b", ["Life", "is"]]]
print(list7[4][2][1])

# %%
print(list2)
print(list2[2:4])
print(list2[:4])
print(list2[:-1])

# %%
print(list5)
print(list5[4:])
print(list5[4][:2])

# %%
# list 연산자
# + : 연결
print(list2 + list3)
print(list5 + list6)
# 값의 연산 : 산술연산
print(list2[1] + list3[0])

# %%
# * : 반복
print(list2 * 2)

# %%
len(list2)  # 길이

# %%
# 리스트 수정 / 삭제
list2[0] = 7
print(list2)

list2[1] = [10, 11, 12]
print(list2)

del list2[1]
print(list2)

del list2[2:]
print(list2)

# %%
for i in list3:
    print(i, end="\t")

# %%
numbers = [353, 66, 2, 77, 575, 22, 468, 89]
# 100 이상의 요소만 출력
for number in numbers:
    if number >= 100:
        print(number)

for number in numbers:
    if number % 2 == 0:
        print("{} : 짝수".format(number))
    else:
        print("{} : 홀수".format(number))

# 숫자의 자릿수 출력
for number in numbers:
    print(len(str(number)))

# %%
# 함수
# 1) append() : list 요소 추가
list3.append(["c", "d", "e"])
print(list3)
list3.append(4)
print(list3)

# %%
# 1~100 숫자 중에서 짝수만 리스트 생성
even = []
for i in range(1, 101):
    if i % 2 == 0:
        even.append(i)
print(even)

# %%
# 2) sort() : 오름차순 정렬
a = [1, 4, 5, 3, 2]
a.sort()
print(a)

a = ["a", "e", "g", "b", "c"]
a.sort()
print(a)

# %%
# 3) reverse() : 리스트 뒤집기(역순 정렬 X)
print(list4)
list4.reverse()
print(list4)

# %%
# 4) index() : index값
list4.index(3)
# list4.index(88)

# %%
# 5) remove() == del 요소지정
# 처음 만나는 요소 제거

# print(list4)
# list4.remove(4)
# print(list4)
list4.append(5.5)
print(list4)


# %%
# 6) pop() : list 요소 맨 마지막 요소 꺼내오기
list4.pop()
print(list4)

# %%
# pop(인덱스) : 인덱스 요소 꺼내기(== 제거)
# 1번째 요소 pop
list4.pop(1)
print(list4)

# %%
# 7) count(찾을 요소) : 찾을 요소 개수 return
list4 = [12, 13, 14, 15, 14]
list4.count(14)

# %%
# 8) extend() : +와 같은 역할, list 확장
list4.extend([16, 17, 18])
print(list4)

# %%
# 9) clear() : list 요소 모두 삭제
list4.clear()
print(list4)

# %%
numbers.sort(reverse=True)
print(numbers)

# %%
# False에 해당 : "", [], (), {}, 0
city = ""
list8 = []

if city:
    print("비어있지 않음")
else:
    print("비어있음")

if list8:
    print("비어있지 않음")
else:
    print("비어있음")

# %%
fruits = ["딸기", "바나나", "사과", "배", "수박"]

# in == sql의 in과 같음
if "딸기" in fruits:
    print("딸기 요소 존재")

print("메론" not in fruits)

# %%
a_class = [70, 45, 22, 567, 78, 54, 89, 100]

sum1 = 0
for a in a_class:
    sum1 += a
avg = sum1 / len(a_class)
print(avg)

# %%
# sum()
sum(a_class)

# %%
