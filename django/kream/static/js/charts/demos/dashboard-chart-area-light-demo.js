// 오늘 날짜 넣기
function insertCurrentDate() {
  const dateElement = document.getElementById("date");
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`; // 원하는 형식으로 날짜 포맷팅
  dateElement.textContent = formattedDate;
}

// 페이지 로드 시 날짜를 삽입
window.onload = insertCurrentDate;

const month_array = document.querySelector("#month_array").value;
const month_data = document.querySelector("#month_data").value;

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
          display: false,
        },
        gridLines: {
          display: false,
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

// 전월 대비 증가량/감소량 계산
const count_month = document.querySelector("#month_array").getAttribute("data-month");
