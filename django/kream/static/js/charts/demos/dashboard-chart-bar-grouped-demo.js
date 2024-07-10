const monthList = document.querySelector("#monthList");

month_array1 = monthList.getAttribute("data-month");
data_array1 = monthList.getAttribute("data-sales");

month_array = JSON.parse(month_array1);
data_array = JSON.parse(data_array1);

var ctx = document.getElementById("dashboardBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: month_array,
    datasets: [
      {
        label: "총판매가격",
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Replace with your color variable
        borderColor: "rgba(75, 192, 192, 1)", // Replace with your color variable
        borderRadius: 4,
        maxBarThickness: 32,
        data: data_array,
      },
    ],
  },
  options: {
    scales: {
      x: {
        time: {
          unit: "month",
        },
        gridLines: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 12,
        },
      },
      y: {
        ticks: {
          min: 0,
          max: 50000,
          maxTicksLimit: 5,
        },
        gridLines: {
          color: "rgba(0, 0, 0, .075)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: true,
      },
    },
  },
});
