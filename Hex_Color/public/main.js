const btn = document.querySelector(".button");
const containers = document.querySelector(".container");

let randomColor;
btn.addEventListener("click", function () {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor != "21130d" && randomColor != "C01212"
    ? (containers.style.backgroundColor = "#" + randomColor)
    : 0;
});
