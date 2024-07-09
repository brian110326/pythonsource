// 숫자 3자리마다 콤마 표시
const value = document.querySelector("#totalSale").innerHTML;
value2 = parseInt(value);

const formatted = value2.toLocaleString("ko-KR");

document.querySelector("#totalSale").innerHTML = formatted;
document.querySelector("#totalSale").innerHTML += "원";

const avgValue = document.querySelector("#avgSale").innerHTML;
avgValue2 = parseFloat(avgValue);

const avgFormatted = avgValue2.toLocaleString("ko-KR");

document.querySelector("#avgSale").innerHTML = avgFormatted;
document.querySelector("#avgSale").innerHTML += "원";
