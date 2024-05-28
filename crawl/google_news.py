# 파이썬 뉴스기사 크롤링
from bs4 import BeautifulSoup
import requests
from urllib.error import HTTPError

url = "https://news.google.com/search?q=%ED%8C%8C%EC%9D%B4%EC%8D%AC&hl=ko&gl=KR&ceid=KR%3Ako"
base_url = "https://news.google.com"


with requests.Session() as s:
    r = s.get(url)
    soup = BeautifulSoup(r.text, "lxml")

    articles = soup.select("div.UW0SDc article")
    for article in articles:
        aTags = article.select("a:nth-child(2)")
        for aTag in aTags:
            title = aTag.string
            href = base_url + aTag["href"][1:]
            # print(f"제목 : {title}, href : {href}")

        report_date_time = article.select_one("time")

        if report_date_time:
            report_date_time = report_date_time["datetime"].split("T")
            report_date = report_date_time[0]
            report_time = report_date_time[1]
        else:
            report_date = ""
            report_time = ""
        print(report_date, report_time)

    comps = soup.find_all("div", class_="vr1PYe")
    for comp in comps:
        print(comp.string)

# news = []
# news.append(
#     {
#         "title": title,
#         "href": href,
#         "writer": comp,
#         "report_date": report_date,
#         "report_time": report_time,
#     }
# )
