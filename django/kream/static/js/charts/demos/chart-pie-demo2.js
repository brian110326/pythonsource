const tag = document.querySelector("#time");
time_array = JSON.parse(tag.getAttribute("data-time"));
sales_array = JSON.parse(tag.getAttribute("data-sales"));

var ctx = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: time_array,
    datasets: [
      {
        data: sales_array,
        label: "시간",
        backgroundColor: [primaryColor, infoColor, secondaryColor, warningColor],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: {
        display: true, // 범례 숨기기
      },
    },
  },
});
