function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = () => {
  let boxSize = 30;
  const newBoxes = [];
  const min = Number(refs.input.getAttribute('min'));
  const max = Number(refs.input.getAttribute('max'));
  const step = Number(refs.input.getAttribute('step'));
  if(refs.input.value <= max && refs.input.value >= min) {
  for (let i = 0; i < refs.input.value; i += step) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    newBoxes.push(box);
  }
}else{alert('Введите число от ${min} до ${max}')}
  return refs.boxes.append(...newBoxes);
};

const destroyBoxes = () => (
  refs.boxes.innerHTML = "",
  refs.input.value = "");

refs.buttonCreate.addEventListener("click", createBoxes);

refs.buttonDestroy.addEventListener("click", destroyBoxes);
