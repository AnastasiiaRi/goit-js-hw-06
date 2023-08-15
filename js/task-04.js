const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const addListenerBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
function increment(){
	counterValue +=1;
    value.textContent = counterValue;
}
function decrement(){
	counterValue -=1;
    value.textContent = counterValue;
}
addListenerBtn.addEventListener('click', increment);
removeListenerBtn.addEventListener('click', decrement);