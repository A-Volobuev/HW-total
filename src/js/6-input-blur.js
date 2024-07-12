const input = document.getElementById('validation-input');
const label = document.querySelector('.js-user-label');
const clearBtn = document.getElementById('clearBtn'); 

function onInputBlur(event) {
    if(input.dataset.length == event.currentTarget.value.length){
        input.classList.remove('invalid');
        label.classList.remove('invalid-label');
        input.classList.add('valid');
        label.classList.add('valid-label');
        console.log('ok')
    } else {
        input.classList.add('invalid');
        label.classList.add('invalid-label');
    };
};
input.addEventListener('blur', onInputBlur);

// Валидация
function onInputValidity(input){
    const symbol = input.data;
    if (symbol >= '0' && symbol <= '9'){
        alert('В имени могут быть указаны только буквы');
        input.preventDefault();
    };
};
input.addEventListener('beforeinput',onInputValidity)

// Добавил что бы надпись была равна дата-атрибуту инпута
label.textContent = `${input.dataset.length} symbols *`;
console.log(label.textContent);

function onClearBtnClick() {
    input.value = '';
    input.classList.remove('invalid');
    label.classList.remove('invalid-label');
    input.classList.remove('valid');
    label.classList.remove('valid-label');
}
clearBtn.addEventListener('click',onClearBtnClick )