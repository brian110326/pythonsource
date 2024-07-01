const deleteAll = document.querySelectorAll(".delete");
const actionForm = document.querySelector("#actionForm");

deleteAll.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (confirm("삭제하시겠습니까?")) {
      location.href = href;
    }
  });
});

// 목록으로 클릭 시 actionForm 전송
document.querySelector("#list").addEventListener("click", (e) => {
  e.preventDefault();
  actionForm.action = e.target.getAttribute("href");
  actionForm.submit();
});
