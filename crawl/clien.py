from fake_useragent import UserAgent
import requests
from bs4 import BeautifulSoup
from xlsx_write import write_excel_template
from datetime import datetime

userAgent = UserAgent()


headers = {"user-agent": userAgent.chrome}

lists = list()

with requests.Session() as s:
    for page in range(5):
        url = "https://www.clien.net/service/board/lecture?&od=T31&category=0&po="
        r = s.get(url + str(page), headers=headers)
        soup = BeautifulSoup(r.text, "lxml")

        titles = soup.select("div.list_title > a > span.subject_fixed")

        times = soup.find_all("span", class_="timestamp")

        for idx, title in enumerate(titles, 1):
            # print(title.text.strip(), times[idx].text.strip()[:10])

            lists.append([title.text.strip(), times[idx - 1].text.strip()[:10]])

    today = datetime.now().strftime("%Y%m%d")
    write_excel_template(f"clien_{today}.xlsx", "팁과강좌", lists)
