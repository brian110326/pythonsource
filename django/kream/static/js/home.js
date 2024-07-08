const value = document.querySelector("#total_sales").innerHTML;
value2 = parseInt(value);
console.log(typeof value2);

const formatted = value2.toLocaleString("ko-KR");

console.log(formatted);
document.querySelector("#total_sales").innerHTML = formatted;
document.querySelector("#total_sales").innerHTML += "원";
