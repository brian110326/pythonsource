const curr_page_year = document.querySelector("#curr_page_year").value;
const curr_years = document.querySelectorAll("#monthly_sales");

curr_years.forEach((element) => {
  year = element.getAttribute("data-year");
  //console.log(year);

  if (curr_page_year == year) {
    curr_year_sales = element.getAttribute("data-yearlySales");
  } else if (curr_page_year - 1 == year) {
    prev_year_sales = element.getAttribute("data-yearlySales");
  }
});

const inc = document.querySelector("#increase");

let calculation;

if (!prev_year_sales) {
  calculation = 0;
} else {
  calculation = ((curr_year_sales - prev_year_sales) / prev_year_sales) * 100;
}

calculation = calculation.toFixed(2) + "%";
inc.innerHTML = calculation;
