const select = document.querySelector("#select");

select.addEventListener("change", (e) => {
  // http://127.0.0.1:8000/kream/monthly/2024/6/
  year = e.target.value.substring(0, 4);
  month = e.target.value.substring(5, 7);

  url = `${window.location.origin}/kream/monthly/${year}/${month}/`;
  window.location.href = url;
});

// 자릿수, 콤마 넣기
const total_sales_data = document.querySelector("#total_sales_data").innerHTML;
const total_sales_data_int = parseInt(total_sales_data);
const total_sales_data_int_ko = total_sales_data_int.toLocaleString("ko-KR");
document.querySelector("#total_sales_data").innerHTML = total_sales_data_int_ko + "원";

const avg = document.querySelector("#avg_sales_data").innerHTML;
const avg_ = parseFloat(avg);
const avg_digit = avg_.toFixed(2);
const avg_kor = parseFloat(avg_digit).toLocaleString("ko-KR");
document.querySelector("#avg_sales_data").innerHTML = avg_kor + "원";

const prop = document.querySelector("#proportion").innerHTML;
const prop_ = parseFloat(prop);
const prop_digit = prop_.toFixed(2);
const prop_kor = parseFloat(prop_digit).toLocaleString("ko-KR");
document.querySelector("#proportion").innerHTML = prop_kor + "%";
