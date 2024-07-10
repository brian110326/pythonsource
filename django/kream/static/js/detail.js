const increaseCal = document.querySelector("#increaseCal");
const text = document.querySelector("#increaseText");
const inc = document.querySelector("#increase");

curr_sales = increaseCal.getAttribute("data-curr");
prev_sales = increaseCal.getAttribute("data-prev");

let calculation;

if (prev_sales == 0) {
  calculation = 0;
  text.innerHTML = "이전년도 거래내역이 없습니다";
} else {
  calculation = ((curr_sales - prev_sales) / prev_sales) * 100;
}

calculation = calculation.toFixed(2);
inc.innerHTML = calculation;

incValue = inc.innerHTML;
incValue2 = parseFloat(incValue);

const incFormatted = incValue2.toLocaleString("ko-KR");

document.querySelector("#increase").innerHTML = incFormatted;
document.querySelector("#increase").innerHTML += "%";

// ====================================================================
const select = document.querySelector("#select");
const pid = document.querySelector("#productId").value;
select.addEventListener("change", (e) => {
  year = e.target.value;
  // http://127.0.0.1:8000/kream/detail/1/2024/
  url = `${window.location.origin}/kream/detail/${pid}/${e.target.value}/`;
  window.location.href = url;
});
