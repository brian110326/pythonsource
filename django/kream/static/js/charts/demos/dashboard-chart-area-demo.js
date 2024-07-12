const size = document.querySelector("#size");
size_array = size.getAttribute("data-size");
sizeListStr = size_array.replace(/'/g, '"');
size_list = JSON.parse(sizeListStr);

sales_array = size.getAttribute("data-sales");
sales_list = JSON.parse(sales_array);

var ctx = document.getElementById("dashboardAreaChart").getContext("2d");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: size_list,
    datasets: [
      {
        fill: {
          target: "origin",
          above: primaryColorOpacity10,
        },
        borderColor: primaryColor,
        label: "Sessions",
        tension: 0.3, // setting tension to 0 disables bezier curves, using a value from 0 to 1 will change the curvature of the line
        pointBackgroundColor: primaryColor,
        pointBorderWidth: 0,
        pointHitRadius: 50,
        pointHoverBackgroundColor: primaryColor,
        pointHoverRadius: 5,
        pointRadius: 0,
        data: sales_list,
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
          display: false,
        },
        ticks: {
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
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
    },
  },
});

const box = document.querySelector("#box");
max_array = box.getAttribute("data-max");
max_list = JSON.parse(max_array);

min_array = box.getAttribute("data-min");
min_list = JSON.parse(min_array);

// 1사분면 값
q1_Str = box.getAttribute("data-first");
q1_array = q1_Str.replace(/'/g, '"');
q1_ = JSON.parse(q1_array);

q1_list = [];

for (var key in q1_) {
  if (q1_.hasOwnProperty(key)) {
    q1_list.push(q1_[key]);
  }
}

// 3사분면 값
q3_Str = box.getAttribute("data-third");
q3_array = q3_Str.replace(/'/g, '"');
q3_ = JSON.parse(q3_array);

q3_list = [];

for (var key in q3_) {
  if (q3_.hasOwnProperty(key)) {
    q3_list.push(q3_[key]);
  }
}

// 중앙값
median_Str = box.getAttribute("data-median");
median_array = median_Str.replace(/'/g, '"');
median_ = JSON.parse(median_array);

median_list = [];

for (var key in median_) {
  if (median_.hasOwnProperty(key)) {
    median_list.push(median_[key]);
  }
}

const data = size_list.map((size, index) => ({
  min: min_list[index],
  max: max_list[index],
  q1: q1_list[index],
  q3: q3_list[index],
  median: median_list[index],
}));

const boxplotData = {
  labels: size_list,
  datasets: [
    {
      label: "사이즈",
      backgroundColor: "rgba(255,0,0,0.5)",
      borderColor: "red",
      borderWidth: 1,
      outlierColor: "#999999",
      padding: 10,
      itemRadius: 0,
      data: data,
    },
  ],
};
window.onload = () => {
  const ctx2 = document.getElementById("boxWhiskerChart").getContext("2d");
  window.myBar = new Chart(ctx2, {
    type: "boxplot",
    data: boxplotData,
    options: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Box Plot Chart",
      },
    },
  });
};
