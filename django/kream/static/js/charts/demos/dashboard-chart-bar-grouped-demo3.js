const prediction = document.querySelector("#prediction").value;

const prediction_ = prediction.replace(/'/g, '"');
prediction_dict = JSON.parse(prediction_);

const months = prediction_dict.map((item) => item.month);
const predictions = prediction_dict.map((item) => item.prediction);

const pred_next = document.querySelector("#pred_next");

if (predictions) {
  const next_sale = predictions[0];
  next_sale_ = next_sale.toFixed(2);
  next_sale_data = parseFloat(next_sale_);
  n = next_sale_data.toLocaleString("ko-KR");
  pred_next.innerHTML = n + "원";
}

const avg_next = document.querySelector("#avg_next");

const sum = predictions.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum / predictions.length;

average_sale_ = average.toFixed(2);
average_sale_data = parseFloat(average_sale_);
a = average_sale_data.toLocaleString("ko-KR");
avg_next.innerHTML = a + "원";

var ctx = document.getElementById("dashboardBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: months,
    datasets: [
      {
        label: "예상매출액",
        backgroundColor: primaryColorOpacity50,
        borderColor: primaryColorOpacity50,
        borderRadius: 4,
        maxBarThickness: 32,
        data: predictions,
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
        display: true,
      },
      tooltip: {
        displayColors: true,
      },
    },
  },
});
