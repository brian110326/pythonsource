from fake_useragent import UserAgent
import requests
from bs4 import BeautifulSoup

userAgent = UserAgent()
url = "https://finance.naver.com/"

headers = {"user-agent": userAgent.chrome}

with requests.Session() as s:
    r = s.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "lxml")

    # container > div.aside > div > div.aside_area.aside_stock > table > tbody > tr:nth-child(1) > th > a
    stock = soup.select("div.aside_area.aside_stock > table > tbody > tr")

    for item in stock:
        company_name = item.select_one("a").string
        print(company_name)

        current_amount = item.select_one("td").string
        print(current_amount)
