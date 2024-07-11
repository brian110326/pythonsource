const barChart = document.querySelector("#barChart");
name_array = barChart.getAttribute("data-pName");
sales_array = barChart.getAttribute("data-sales");
sales_list = JSON.parse(sales_array);

const name_Str = name_array.replace(/'(?=[0-9]|[a-zA-Z])+/, "");
const name_list = name_Str.replace(/'/g, '"');
const name_ = JSON.parse(name_list);

// 저번달 똑같은 상품 매출액
sales_array_last = barChart.getAttribute("data-lastsales");
sales_list_last = JSON.parse(sales_array_last);

var ctx = document.getElementById("dashboardBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: name_,
    datasets: [
      {
        label: "전월 매출액",
        backgroundColor: primaryColorOpacity50,
        borderColor: primaryColorOpacity50,
        borderRadius: 4,
        maxBarThickness: 32,
        data: sales_list_last,
      },
      {
        label: "현월 매출액",
        backgroundColor: primaryColor,
        borderColor: primaryColor,
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
          display: true,
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
        display: true,
      },
      tooltip: {
        displayColors: true,
      },
    },
  },
});
