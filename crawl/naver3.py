from bs4 import BeautifulSoup
import requests
from urllib.error import HTTPError
from openpyxl import Workbook
from xlsx_write import write_excel_template

wb = Workbook()
ws = wb.active
ws.title = "도서검색"
ws.column_dimensions["B"].width = 25
ws.column_dimensions["C"].width = 50

ws.append(["번호", "isbn", "책제목", "할인가격"])

headers = {
    "X-Naver-Client-Id": "QAkT4398UqNmY3pM9Xaz",
    "X-Naver-Client-Secret": "MZ6XvCh9Q1",
}

start, num = 1, 0
for idx in range(3):
    # idx : 0 ~ 9
    start_num = start + (idx * 100)
    url = "https://openapi.naver.com/v1/search/book.json"
    params = {"query": "베르나르 베르베르", "display": 100, "start": str(start_num)}
    r = requests.get(url, headers=headers, params=params)

    # print(r.url)

    # json 가져오기
    data = r.json()
    # print(data)

    # print(data["items"])

    for idx, item in enumerate(data["items"], 1):
        ws.append([num, item["isbn"], item["title"], item["discount"]])
        num += 1

base_dir = "./crawl/file/"
wb.save(base_dir + "naver3.xlsx")
wb.close()
