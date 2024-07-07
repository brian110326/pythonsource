document.addEventListener("DOMContentLoaded", () => {
  const datas = document.querySelectorAll("#monthly_sales");
  const select = document.querySelector("#select");
  const options = document.querySelectorAll("#option");

  const addedYear = new Set();

  options.forEach((option) => {
    const year = option.getAttribute("data-year");
    if (!addedYear.has(year)) {
      addedYear.add(year);
    }
  });

  select.innerHTML = '<input type="hidden" name="">';
  addedYear.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  });

  function updateChart(year) {
    const arrData = [];
    const addedMonth = new Set();

    datas.forEach((element) => {
      const tradeYear = element.getAttribute("data-year");
      if (tradeYear == year) {
        const data = {};
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

    arrData.sort((a, b) => {
      return a.month - b.month;
    });

    const month_array = [];
    const data_array = [];
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
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Replace with your color variable
            borderColor: "rgba(75, 192, 192, 1)", // Replace with your color variable
            borderRadius: 4,
            maxBarThickness: 32,
            data: data_array,
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
  }

  select.addEventListener("change", (e) => {
    const selectedOption = e.target.value;

    const pid = document.querySelector("#pid").value;
    const url = `http://127.0.0.1:8000/kream/detail/${pid}/${selectedOption}/`;

    window.location.href = url;
  });

  const pathSegments = window.location.pathname.split("/");
  const yearFromUrl = pathSegments[4];
  if (yearFromUrl) {
    updateChart(yearFromUrl);
    select.value = yearFromUrl;
  }
});
