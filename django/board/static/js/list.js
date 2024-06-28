// 검색어 가져오기
// 검색어 없을 시 alert창 메세지 띄워주기

// 검색어 있는 경우 : actionForm keyword value에 삽입
// page value => 1로 변경
const actionForm = document.querySelector("#actionForm");

document.querySelector("#btn_search").addEventListener("click", (e) => {
  const keyword = document.querySelector("#top_keyword");
  if (!keyword.value) {
    keyword.focus();
    alert("검색어를 입력하세요");
    return;
  }

  actionForm.querySelector("#keyword").value = keyword.value;

  const page = actionForm.querySelector("#page");
  page.value = 1;

  // actionForm.submit();
});
