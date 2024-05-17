PI = 3.141592


class Test:
    def solv(self, r):
        return PI * (r**2)

    def sum1(self, a, b):
        return a + b


# 모듈 테스트
if __name__ == "__main__":
    print(PI)
    a = Test()
    print(a.solv(4))
    print(a.sum1(4, 5))
