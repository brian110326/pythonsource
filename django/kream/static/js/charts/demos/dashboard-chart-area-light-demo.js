// 오늘 날짜 넣기
function insertCurrentDate() {
  const dateElement = document.getElementById("date2");
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`; // 원하는 형식으로 날짜 포맷팅
  dateElement.textContent = formattedDate;
}

// 페이지 로드 시 날짜를 삽입
window.onload = insertCurrentDate;

// 전월 대비 증가량/감소량 계산
const count_month = document.querySelector("#month_array").getAttribute("data-countMonth");

// 제일 최근 거래 달의 데이터 가져오기
const datas = document.querySelector("#month_data").value;
filtered_datas = JSON.parse(datas);
calc = ((filtered_datas[count_month - 1] - filtered_datas[count_month - 2]) / filtered_datas[count_month - 2]) * 100;

const icon = document.querySelector("#icon");
if (calc < 0) {
  icon.innerHTML = "trending_down";
}

calc_ = parseFloat(calc.toFixed(2));
calc_2 = calc_.toLocaleString("ko-KR");
calc_2 += "%";
const dateElement = document.getElementById("date");
dateElement.textContent = calc_2;

const month_array = document.querySelector("#month_array").value;
const month_data = document.querySelector("#month_data").value;

// =================================================================================
// 전년도 대비 증가량/감소량 계산
const count_year = document.querySelector("#year_array").getAttribute("data-countyear");

// 제일 최근 거래 년도의 데이터 가져오기
const datas2 = document.querySelector("#year_data").value;
filtered_datas2 = JSON.parse(datas2);
calc2 = ((filtered_datas2[count_year - 1] - filtered_datas2[count_year - 2]) / filtered_datas2[count_year - 2]) * 100;

calc2 = parseFloat(calc2.toFixed(2));
let calc2_str = calc2.toLocaleString("ko-KR");
if (calc2 > 0) {
  calc2_str = "+" + calc2_str;
}
calc2_str += "%";
const inputElement = document.getElementById("input");
inputElement.textContent = calc2_str;

// =================================================================================
const latest_month_data = document.querySelector("#latest_month_data").value;
const len = document.querySelector("#latest_month_data").getAttribute("data-len");
filtered_latest_month_data = JSON.parse(latest_month_data);

if (!filtered_latest_month_data[len - 2]) {
  filtered_latest_month_data[len - 2] = 0;
}

let calc3;

if (filtered_latest_month_data[len - 2] == 0) {
  calc3 = 0.0;
}

calc3 = ((filtered_latest_month_data[len - 1] - filtered_latest_month_data[len - 2]) / filtered_latest_month_data[len - 2]) * 100;

calc3 = parseFloat(calc3.toFixed(2));
let calc3_str = calc3.toLocaleString("ko-KR");
if (calc3 > 0) {
  calc3_str = "+" + calc3_str;
}

calc3_str += "%";
document.querySelector("#input2").innerHTML = calc3_str;

// =================================================================================
const input3 = document.querySelector("#input3").innerHTML;
input3Value = parseInt(input3);
input3Value_ = input3Value.toLocaleString("ko-KR");
document.querySelector("#input3").innerHTML = input3Value_ + "원";

// =================================================================================
const input3_ = document.querySelector("#input3_").innerHTML;

document.querySelector("#input3_").innerHTML = input3_ + "분기 매출액";

// =================================================================================
const input4 = document.querySelector("#input4").innerHTML;

let input4_1 = parseFloat(input4);

let input4_2 = parseFloat(input4_1.toFixed(2));

let input4_3 = input4_2.toLocaleString("ko-KR");

if (input4_2 > 0) {
  input4_3 = "+" + input4_3;
}

input4_3 += "%";

document.querySelector("#input4").innerHTML = input4_3;

// string => 배열객체로 변환
month_array2 = JSON.parse(month_array);
month_data2 = JSON.parse(month_data);

var ctx = document.getElementById("dashboardAreaChartLight").getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(255,255,255,0.3)");
gradient.addColorStop(1, "rgba(255,255,255,0)");

var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: month_array2,
    datasets: [
      {
        fill: {
          target: "origin",
          above: gradient,
        },
        borderColor: "rgba(255, 255, 255, 1)",
        label: "매출액",
        tension: 0.3, // setting tension to 0 disables bezier curves, using a value from 0 to 1 will change the curvature of the line
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
        pointHoverRadius: 5,
        pointRadius: 0,
        data: month_data2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        time: {
          unit: "date",
        },
        gridLines: {
          borderDash: [5, 10],
          borderDashOffset: 5,
          color: "rgba(255, 255, 255, .3)",
        },
        ticks: {
          color: "rgba(255, 255, 255, .75)",
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
          display: true,
          color: "rgba(255, 255, 255, .75)", // 설정한 색상으로 눈금 숫자 표시
        },
        gridLines: {
          display: true, // y축의 그리드 라인 표시
          color: "rgba(255, 255, 255, .3)", // 설정한 색상으로 그리드 라인 표시
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
