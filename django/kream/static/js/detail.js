const select = document.querySelector("#select");
const options = document.querySelectorAll("#option");

const addedYear = new Set();

options.forEach((option) => {
  year = option.getAttribute("data-year");
  if (!addedYear.has(year)) {
    addedYear.add(year);
  }
});

select.innerHTML = "<option selected>년도 선택</option>";
addedYear.forEach((year) => {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  select.appendChild(option);
});

// Add event listener to the select element to detect change event
select.addEventListener("change", (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex];

  year = selectedOption.value;
  console.log(year);

  const url = `http://127.0.0.1:8000/kream/detail/1/${year}/`;
  console.log(url);

  window.location.href = url;
});
