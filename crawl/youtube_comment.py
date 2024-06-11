from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from bs4 import BeautifulSoup
import time
from urllib.request import urlretrieve
import pandas as pd


def main():
    browser = set_chrome_driver()
    browser.get("https://www.youtube.com/watch?v=HosW0gulISQ")

    time.sleep(2)

    # scroll 움직이기
    # 동적 페이지에 대해서 마지막까지 스크롤 반복 수행
    interval = 5

    # 현재 문서 높이를 가져와서 저장
    # body 대신 documentElemnet 사용
    prev_height = browser.execute_script("return document.documentElement.scrollHeight")

    while True:
        browser.execute_script(
            "window.scrollTo(0,document.documentElement.scrollHeight)"
        )
        time.sleep(interval)
        cur_height = browser.execute_script(
            "return document.documentElement.scrollHeight"
        )

        if cur_height == prev_height:
            break

        prev_height = cur_height

    time.sleep(2)

    # 전체 소스를 BeautifulSoup에 담기
    soup = BeautifulSoup(browser.page_source, "lxml")

    # 댓글 사용자의 아이디 및 코멘트 가져오기
    ids = soup.select("#author-text > span")
    comments = soup.select("#content-text > span")

    ids_list = []
    comments_list = []

    # 확인
    for idx in range(len(ids)):
        # print(ids[idx].text.strip(), comments[idx].text.strip())
        clean_id = ids[idx].text.strip()
        clean_id = clean_id.replace("\n", " ")
        clean_id = clean_id.replace("\t", " ")
        ids_list.append(clean_id)

        clean_comment = comments[idx].text.strip()
        clean_comment = clean_comment.replace("\n", " ")
        clean_comment = clean_comment.replace("\t", " ")
        comments_list.append(clean_comment)

    # DataFrame  생성
    dict_data = {"ID": ids_list, "Comments": comments_list}
    df = pd.DataFrame(dict_data)

    df.to_csv("./crawl/file/youtube.csv", index=False)

    time.sleep(5)


def set_chrome_driver():
    options = ChromeOptions()
    # options.add_argument("--start-maximized")
    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()), options=options
    )
    return driver


if __name__ == "__main__":
    main()
