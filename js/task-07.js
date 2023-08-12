const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


input.addEventListener('input', onInputChange);
function onInputChange(event) {
const newFontSize = event.currentTarget.value;
text.style.fontSize = `${newFontSize}px`;
};
