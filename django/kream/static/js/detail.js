// const curr_page_year = document.querySelector("#curr_page_year").value;
// const curr_years = document.querySelectorAll("#monthly_sales");

// let curr_year_sales = 0;
// let prev_year_sales = 0;

// curr_years.forEach((element) => {
//   year = element.getAttribute("data-year");
//   //console.log(year);

//   if (curr_page_year == year) {
//     curr_year_sales = element.getAttribute("data-yearlySales");
//   } else if (curr_page_year - 1 == year) {
//     prev_year_sales = element.getAttribute("data-yearlySales");
//   }
// });

// const inc = document.querySelector("#increase");
// const text = document.querySelector("#increaseText");

// let calculation;

// if (!prev_year_sales) {
//   calculation = 0;
//   text.innerHTML = "이전년도 거래내역이 없습니다";
// } else {
//   calculation = ((curr_year_sales - prev_year_sales) / prev_year_sales) * 100;
// }

// calculation = calculation.toFixed(2) + "%";
// inc.innerHTML = calculation;

const increaseCal = document.querySelector("#increaseCal");
const text = document.querySelector("#increaseText");
const inc = document.querySelector("#increase");

curr_sales = increaseCal.getAttribute("data-curr");
prev_sales = increaseCal.getAttribute("data-prev");

let calculation;

if (!prev_sales) {
  calculation = 0;
  text.innerHTML = "이전년도 거래내역이 없습니다";
} else {
  calculation = ((curr_sales - prev_sales) / prev_sales) * 100;
}

calculation = calculation.toFixed(2) + "%";
inc.innerHTML = calculation;

// ====================================================================
const select = document.querySelector("#select");
const pid = document.querySelector("#productId").value;
select.addEventListener("change", (e) => {
  year = e.target.value;
  // http://127.0.0.1:8000/kream/detail/1/2024/
  url = `${window.location.origin}/kream/detail/${pid}/${e.target.value}/`;
  window.location.href = url;
});
