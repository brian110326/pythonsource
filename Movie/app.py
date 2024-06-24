import pickle
import streamlit as st
from tmdbv3api import Movie, TMDb


def get_recommendations(title):

    # 영화 제목을 통해서 전체 데이터 기준 그 영화의 index값을 얻기
    idx = movies[movies["title"] == title].index[0]

    # 코사인 유사도 매트릭스 cosine_sim에서 idx에 해당하는 데이터를 idx, 유사도 형태로 얻기
    # 몇번째 영화가 특정 코사인 유사도값을 가지고있는지 알기위해서
    sim_scores = list(enumerate(cosine_sim[idx]))

    # 코사인 유사도 내림차순 정렬
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # 자기 자신을 제외한 10개의 추천 영화 슬라이싱
    sim_scores = sim_scores[1:11]

    # 추천 영화 목록 10개의 인덱스 정보 추출
    movie_indices = [i[0] for i in sim_scores]

    # 인덱스 정보를 통해 제목 가져오기
    images = []
    titles = []
    for i in movie_indices:
        id = movies["id"].iloc[i]
        details = movie.details(id)

        image_path = details["poster_path"]
        if image_path:
            image_path = "https://image.tmdb.org/t/p/w500" + image_path
        else:
            image_path = "Movie/data/no_image.jpg"

        images.append(image_path)
        titles.append(details["title"])

    return images, titles


movie = Movie()
tmdb = TMDb()

# tmdb api사용하기 위한 코드
tmdb.api_key = "34bef0262736f8a4b3b292d56091124c"

movies = pickle.load(open("Movie/data/movies.pickle", "rb"))
cosine_sim = pickle.load(open("Movie/data/cosine_sim.pickle", "rb"))

# 화면 넓게 보기
st.set_page_config(layout="wide")
st.header("BrianFlix")

movie_list = movies["title"].values
title = st.selectbox("Choose a moive you like", movie_list)

if st.button("Recommend"):
    with st.spinner("Please wait..."):
        images, titles = get_recommendations(title)

        idx = 0
        for i in range(0, 2):
            cols = st.columns(5)
            for col in cols:
                col.image(images[idx])
                col.write(titles[idx])
                idx += 1

# 터미널에서 streamlit run Movie/app.py 입력
