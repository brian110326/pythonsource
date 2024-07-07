// Demo Grouped Bar Chart
//
// The style configurations in this demo are
// intended to match the Material Design styling.
// Use this demo chart as a starting point and for
// reference when creating charts within an app.
//
// Chart.js v3 is being used, which is currently
// in beta. For the v3 docs, visit
// https://www.chartjs.org/docs/master/

var ctx = document.getElementById("dashboardBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        label: "총판매가격",
        backgroundColor: primaryColorOpacity50,
        borderColor: primaryColorOpacity50,
        borderRadius: 4,
        maxBarThickness: 32,
        data: [4853, 12395, 22495, 29876, 44535, 54984, 54984, 54984, 54984, 54984, 54984, 54984],
      },
      //   {
      //     label: "This Year",
      //     backgroundColor: primaryColor,
      //     borderColor: primaryColor,
      //     borderRadius: 4,
      //     maxBarThickness: 32,
      //     data: [9831, 17498, 27337, 34897, 49897, 59482, 49897, 49897, 49897, 49897, 49897, 49897],
      //   },
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
