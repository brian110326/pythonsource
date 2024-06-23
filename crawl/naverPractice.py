from bs4 import BeautifulSoup
import requests
from urllib.error import HTTPError
from openpyxl import Workbook
from xlsx_write import write_excel_template

wb = Workbook()
ws = wb.active
ws.title = "아이폰 기사"
ws.column_dimensions["B"].width = 50
ws.column_dimensions["C"].width = 50

ws.append(["번호", "뉴스제목", "링크"])

url = "https://openapi.naver.com/v1/search/news.json"

headers = {
    "X-Naver-Client-Id": "QAkT4398UqNmY3pM9Xaz",
    "X-Naver-Client-Secret": "MZ6XvCh9Q1",
}

start, num = 1, 0
for idx in range(3):
    start_num = start + (100 * idx)
    r = requests.get(
        url=url,
        headers=headers,
        params={"query": "아이폰", "display": 80, "start": start_num},
    )

    data = r.json()

    for i, item in enumerate(data["items"], start=1):
        ws.append([num, item["title"], item["originallink"]])
        num += 1


wb.save("./crawl/file/iphone.xlsx")
wb.close()
