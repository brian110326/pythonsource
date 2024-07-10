const sizeList = document.querySelector("#sizeChart").getAttribute("data-sizeList");

// 작은 따옴표로 있으면 안됨. 큰따옴표로 변환해야함
sizeListStr = sizeList.replace(/'/g, '"');
size_arr = JSON.parse(sizeListStr);

const dataList = document.querySelector("#sizeChart").getAttribute("data-sales");
data_arr = JSON.parse(dataList);

var ctx = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: size_arr,
    datasets: [
      {
        data: data_arr,
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
          "#ffcd56",
          "#4bc0c0",
          "#9966ff",
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
          "#e377c2",
          "#7f7f7f",
          "#bcbd22",
          "#17becf",
        ],
      },
    ],
  },
});
