// 검색어(top_keyword) 가져오기
// 없는 경우 alert()

// 있는 경우
// actionForm keyword value에 삽입
//            page value 1로 변경
const actionForm = document.querySelector("#actionForm");
document.querySelector("#btn_search").addEventListener("click", () => {
  const top_keyword = document.querySelector("#top_keyword");

  if (top_keyword.value === "") {
    alert("검색어를 입력해 주세요");
    top_keyword.focus();
    return;
  }

  actionForm.querySelector("#keyword").value = top_keyword.value;
  actionForm.querySelector("#page").value = 1;
  actionForm.submit();
});

// 페이지 나누기 + 검색어
// 페이지 나누기 클릭시 href에 있는 값 가져오기
// actionForm의 page value변경
document.querySelector(".pagination").addEventListener("click", (e) => {
  e.preventDefault();
  actionForm.querySelector("#page").value = e.target.getAttribute("href");
  actionForm.submit();
});
