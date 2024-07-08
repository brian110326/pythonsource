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

calc = calc.toFixed(2) + "%";
const dateElement = document.getElementById("date");
dateElement.textContent = calc;

const month_array = document.querySelector("#month_array").value;
const month_data = document.querySelector("#month_data").value;

// =================================================================================
// 전년도 대비 증가량/감소량 계산
const count_year = document.querySelector("#year_array").getAttribute("data-countyear");

// 제일 최근 거래 년도의 데이터 가져오기
const datas2 = document.querySelector("#year_data").value;
filtered_datas2 = JSON.parse(datas2);
calc2 = ((filtered_datas2[count_year - 1] - filtered_datas2[count_year - 2]) / filtered_datas2[count_year - 2]) * 100;

calc2 = calc2.toFixed(2);
if (calc2 > 0) {
  calc2 = "+" + calc2;
}
calc2 += "%";
const inputElement = document.getElementById("input");
inputElement.textContent = calc2;

// =================================================================================
const latest_month_data = document.querySelector("#latest_month_data").value;
filtered_latest_month_data = JSON.parse(latest_month_data);
calc3 =
  ((filtered_latest_month_data[count_year - 1] - filtered_latest_month_data[count_year - 2]) / filtered_latest_month_data[count_year - 2]) * 100;
calc3 = calc3.toFixed(2);
if (calc3 > 0) {
  calc3 = "+" + calc3;
}
calc3 += "%";
document.querySelector("#input2").innerHTML = calc3;

// =================================================================================
const input3 = document.querySelector("#input3").innerHTML;
input = input3.replace(/^\[|\]$/g, "");
document.querySelector("#input3").innerHTML = input + "원";

// =================================================================================
const input3_ = document.querySelector("#input3_").innerHTML;
input_ = input3_.replace(/^\[|\]$/g, "");
document.querySelector("#input3_").innerHTML = input_ + "분기 매출액";

// =================================================================================
const input4 = document.querySelector("#input4").innerHTML;
input4_1 = parseFloat(input4);
input4_2 = input4_1.toFixed(2);
if (input4_1 > 0) {
  input4_1 = "+" + input4_1;
}
input4_2 += "%";

document.querySelector("#input4").innerHTML = input4_2;
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
        label: "Sessions",
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
