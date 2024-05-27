from fake_useragent import UserAgent
import requests
from bs4 import BeautifulSoup

userAgent = UserAgent()
url = "https://www.clien.net/service/board/lecture?&od=T31&category=0&po=1"

headers = {"user-agent": userAgent.chrome}

with requests.Session() as s:
    r = s.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "lxml")
