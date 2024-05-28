from bs4 import BeautifulSoup
import requests
from urllib.error import HTTPError

url = "https://openapi.naver.com/v1/search/shop.json"
headers = {
    "X-Naver-Client-Id": "QAkT4398UqNmY3pM9Xaz",
    "X-Naver-Client-Secret": "MZ6XvCh9Q1",
}
params = {"query": "yeezy"}

r = requests.get(url, headers=headers, params=params)

# json 가져오기
data = r.json()
# print(data)

# print(data["items"])

for idx, item in enumerate(data["items"], 1):
    print(idx, item["title"], item["link"])
