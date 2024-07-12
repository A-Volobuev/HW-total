const counter = {
    value:0,
    decrement() {
        this.value -= 1;
    },
    increment () {
        this.value +=1;
    },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');


decrementBtn.addEventListener('click', () => {
    if(counter.value == 0) {
        decrementBtn.classList.add('disabled-button');
        decrementBtn.disabled;
        // Меседж который мы выводим, добавляю тут, что бы использовать переменную 
    const errorMsg = `<i class="fa-solid fa-circle-xmark toast-icon toast-icon__error"></i> Нужно добавить больше товаров`;
    // Появление окна
    const toast = document.createElement('div');
    toast.classList.add('toast', 'toast__error');
    toast.innerHTML = errorMsg;
    toastBox.appendChild(toast);
    
    setTimeout(()=>{
        toast.remove();
    },6000);

    } else {
        counter.decrement();
    };
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', () => {
    if(counter.value >= 10) {
        incrementBtn.disabled;
        // Меседж который мы выводим, добавляю тут, что бы использовать переменную 
        const errorMsg = `<i class="fa-solid fa-circle-xmark toast-icon toast-icon__error"></i> Максимум товаров`;
        // Появление окна
        const toast = document.createElement('div');
        toast.classList.add('toast', 'toast__error');
        toast.innerHTML = errorMsg;
        toastBox.appendChild(toast);
        setTimeout(()=>{
            toast.remove();
        },6000);
    } else counter.increment();

    valueEl.textContent = counter.value;
});



// Для изменения цвета кнопок 
incrementBtn.addEventListener('click', () => {
    if(counter.value == 10){
        incrementBtn.classList.add('button__disabled');
    };
    if(counter.value > 0) {
        decrementBtn.classList.remove('button__disabled');
        decrementBtn.classList.add('button');
    };

    valueEl.textContent = counter.value;
});
decrementBtn.addEventListener('click', () => {
    if(counter.value == 0){
        decrementBtn.classList.add('button__disabled');
    };
    if(counter.value < 10) {
        incrementBtn.classList.remove('button__disabled');
        incrementBtn.classList.add('button');
    };

    valueEl.textContent = counter.value;
});

