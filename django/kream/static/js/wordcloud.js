const imgtag = document.querySelector("#wordcloudImg").getAttribute("src");
const src = imgtag.substring(22, 26);

if (src == "None") {
  const noneMsg = document.querySelector("#noneMsg");
  noneMsg.innerHTML = "리뷰가 존재하지 않는 상품입니다.";
}
