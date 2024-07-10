const completed = document.querySelectorAll("#completed");

completed.forEach((c) => {
  if (c.innerHTML == "True") {
    c.innerHTML = "O";
  } else if ((c.innerHTML = "False")) {
    c.innerHTML = "x";
  }
});
