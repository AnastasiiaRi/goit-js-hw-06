const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);
inputEl.addEventListener('blur', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value.trim().length === inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else { 
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    };
};