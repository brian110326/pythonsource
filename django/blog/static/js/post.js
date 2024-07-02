document.querySelector("#like").addEventListener("click", (e) => {
  // e.target : 실제 이벤트 대상 => span
  // e.currentTarget : 이벤트 대상 부모

  const post_id = e.currentTarget.dataset.post;
  fetch(`/blog/post/like/${post_id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
