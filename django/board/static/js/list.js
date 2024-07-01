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

// 정렬기준 변화 일어나면 value 가져온 후
// actionForm의 so value 변경
document.querySelector(".so").addEventListener("change", (e) => {
  so_value = e.target.value;
  actionForm.querySelector("#so").value = so_value;
  actionForm.submit();
});

// 제목 클릭 시 actionForm 보내기
document.querySelector("tbody").addEventListener("click", (e) => {
  e.preventDefault();

  // href 값 가져오기

  // actionForm action변경
  actionForm.action = `/board/${e.target.getAttribute("href")}`;

  actionForm.submit();
});
