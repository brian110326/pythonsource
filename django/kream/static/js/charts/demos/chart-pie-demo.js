const sizeDatas = document.querySelectorAll("#size_sales");

const arrSizeData = new Array();
const addedSize = new Set();

sizeDatas.forEach((element) => {
  const tradeYear = element.getAttribute("data-year");
  if (tradeYear == "2024") {
    const data = new Object();
    const tradeSize = element.getAttribute("data-size");

    // sizeSales 동일하니 1개만 보여주기(중복 방지 위해 Set구조)
    if (!addedSize.has(tradeSize)) {
      data.size = tradeSize;
      data.sizeSales = element.value;
      arrSizeData.push(data);
      addedSize.add(tradeSize);
    }
  }
});

size_array = [];
data_array = [];
arrSizeData.forEach((arr) => {
  size_array.push(arr.size);
  data_array.push(arr.sizeSales);
});

var ctx = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: size_array,
    datasets: [
      {
        data: size_array,
        backgroundColor: [primaryColor, infoColor, secondaryColor, warningColor],
      },
    ],
  },
});
