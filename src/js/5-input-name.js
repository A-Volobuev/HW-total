const input = document.querySelector('.js-name-input');
const nameOutput = document.querySelector('.js-name-output');
const clearBtn = document.getElementById('clearBtn');

function onInput (event) {
    if(event.currentTarget.value === ''){
        nameOutput.textContent = 'Anonymous';
    } else nameOutput.textContent = event.currentTarget.value;
};
input.addEventListener('input', onInput);

function onInputValidity(input){
    const symbol = input.data;
    if (symbol >= '0' && symbol <= '9'){
        alert('В имени могут быть указаны только буквы');
        input.preventDefault();
    };
}
input.addEventListener('beforeinput', onInputValidity)

function onClearBtnClick(){
    input.value ='';
    nameOutput.textContent = 'Anonymous';
}
clearBtn.addEventListener('click', onClearBtnClick);