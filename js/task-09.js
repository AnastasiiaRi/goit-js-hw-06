function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeCol = document.querySelector(".change-color");
const changeCol = document.querySelector(".color");
const body = document.querySelector("body");

btnChangeCol.addEventListener('click', changeColor);
function changeColor(event) {
const color = getRandomHexColor();
body.style.background = color;
changeCol.textContent = color;
}