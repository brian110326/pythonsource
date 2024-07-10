const select = document.querySelector("#select");

select.addEventListener("change", (e) => {
  // http://127.0.0.1:8000/kream/monthly/2024/6/
  year = e.target.value.substring(0, 4);
  month = e.target.value.substring(5, 6);

  url = `${window.location.origin}/kream/monthly/${year}/${month}/`;
  window.location.href = url;
});
