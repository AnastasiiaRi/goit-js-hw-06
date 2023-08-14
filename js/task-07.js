const fontSizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

console.log(fontSizeControl.value);

fontSize.style.fontSize = fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", ()=> {
    fontSize.style.fontSize = fontSizeControl.value + "px";
   
})