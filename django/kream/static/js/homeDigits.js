const total = document.querySelector("#total").innerHTML;
total2 = parseInt(total);

const totalFormatted = total2.toLocaleString("ko-KR");

document.querySelector("#total").innerHTML = totalFormatted;
document.querySelector("#total").innerHTML += "원";
