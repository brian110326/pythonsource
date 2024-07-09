// document.addEventListener("DOMContentLoaded", () => {
//   const sizeDatas = document.querySelectorAll("#size_sales");
//   const select = document.querySelector("#select");
//   const options = document.querySelectorAll("#option");

//   const addedYear = new Set();

//   options.forEach((option) => {
//     const year = option.getAttribute("data-year");
//     if (!addedYear.has(year)) {
//       addedYear.add(year);
//     }
//   });

//   function updateChart(year) {
//     const arrSizeData = new Array();
//     const addedSize = new Set();

//     sizeDatas.forEach((element) => {
//       const tradeYear = element.getAttribute("data-year");
//       if (tradeYear == year) {
//         const data = new Object();
//         const tradeSize = element.getAttribute("data-size");

//         // sizeSales 동일하니 1개만 보여주기(중복 방지 위해 Set구조)
//         if (!addedSize.has(tradeSize)) {
//           data.size = tradeSize;
//           data.sizeSales = element.value;
//           arrSizeData.push(data);
//           addedSize.add(tradeSize);
//         }
//       }
//     });

//     size_array = [];
//     data_array = [];
//     arrSizeData.forEach((arr) => {
//       size_array.push(arr.size);
//       data_array.push(arr.sizeSales);
//     });

//     var ctx = document.getElementById("myPieChart").getContext("2d");
//     var myPieChart = new Chart(ctx, {
//       type: "pie",
//       data: {
//         labels: size_array,
//         datasets: [
//           {
//             data: data_array,
//             backgroundColor: [primaryColor, infoColor, secondaryColor, warningColor, "red", "orange", "yellow", "green", "blue", "purple"],
//           },
//         ],
//       },
//     });
//   }

//   select.addEventListener("change", (e) => {
//     const selectedOption = e.target.value;
//     const pid = document.querySelector("#pid").value;
//     const url = `http://127.0.0.1:8000/kream/detail/${pid}/${selectedOption}/`;
//     window.location.href = url;
//   });

//   const pathSegments = window.location.pathname.split("/");
//   const yearFromUrl = pathSegments[4];
//   if (yearFromUrl) {
//     updateChart(yearFromUrl);
//     select.value = yearFromUrl;
//   }
// });

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
