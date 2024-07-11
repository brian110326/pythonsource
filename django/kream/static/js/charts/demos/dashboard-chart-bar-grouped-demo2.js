const barChart = document.querySelector("#barChart");
name_array = barChart.getAttribute("data-pName");
sales_array = barChart.getAttribute("data-sales");
sales_list = JSON.parse(sales_array);

const name_Str = name_array.replace(/'(?=[0-9]|[a-zA-Z])+/, "");
const name_list = name_Str.replace(/'/g, '"');
const name_ = JSON.parse(name_list);
console.log(name, typeof name);

var ctx = document.getElementById("dashboardBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: name_,
    datasets: [
      {
        label: "매출액",
        backgroundColor: primaryColorOpacity50,
        borderColor: primaryColorOpacity50,
        borderRadius: 4,
        maxBarThickness: 32,
        data: sales_list,
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
