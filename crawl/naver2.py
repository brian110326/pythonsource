from bs4 import BeautifulSoup
import requests
from urllib.error import HTTPError
from openpyxl import Workbook
from xlsx_write import write_excel_template

wb = Workbook()
ws = wb.active
ws.title = "Naver Open API"
ws.column_dimensions["B"].width = 100
ws.column_dimensions["C"].width = 60

ws.append(["순위", "상품명", "판매경로"])

headers = {
    "X-Naver-Client-Id": "QAkT4398UqNmY3pM9Xaz",
    "X-Naver-Client-Secret": "MZ6XvCh9Q1",
}

start, num = 1, 0
for idx in range(10):
    # idx : 0 ~ 9
    start_num = start + (idx * 100)
    url = "https://openapi.naver.com/v1/search/shop.json"
    params = {"query": "iphone", "display": 100, "start": str(start_num)}
    r = requests.get(url, headers=headers, params=params)

    # print(r.url)

    # json 가져오기
    data = r.json()
    # print(data)

    # print(data["items"])

    for idx, item in enumerate(data["items"], 1):
        # print(idx, item["title"], item["link"])  # <b>아이폰</b>
        ws.append([num, item["title"], item["link"]])
        num += 1

base_dir = "./crawl/file/"
wb.save(base_dir + "naver.xlsx")
wb.close()
