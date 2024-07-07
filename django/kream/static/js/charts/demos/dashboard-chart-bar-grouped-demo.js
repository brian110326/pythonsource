const datas = document.querySelectorAll("#monthly_sales");
const arrData = new Array();
const addedMonth = new Set();

const targetYear = null;

select.addEventListener("change", (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex];

  targetYear = selectedOption.value;
  console.log(targetYear);
});

datas.forEach((element) => {
  const tradeYear = element.getAttribute("data-year");
  if (tradeYear == targetYear) {
    const data = new Object();
    const tradeMonth = element.getAttribute("data-month");

    // monthly_sales는 동일하니 1개만 보여주기(중복 방지 위해 Set구조)
    if (!addedMonth.has(tradeMonth)) {
      data.month = tradeMonth;
      data.monthlySales = element.value;
      arrData.push(data);
      addedMonth.add(tradeMonth);
    }
  }
});

arrData.sort(function (a, b) {
  return a.month - b.month;
});

month_array = [];
data_array = [];
arrData.forEach((arr) => {
  month_array.push(arr.month);
  data_array.push(arr.monthlySales);
});

var ctx = document.getElementById("dashboardBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: month_array,
    datasets: [
      {
        label: "총판매가격",
        backgroundColor: primaryColorOpacity50,
        borderColor: primaryColorOpacity50,
        borderRadius: 4,
        maxBarThickness: 32,
        // monthly_sales
        data: data_array,
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
