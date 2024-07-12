const formEl = document.querySelector('.login-form');

const toastBox = document.getElementById('toastBox');


// Обработка отправки формы form.login-form должна быть по событию submіt
    // Добавляем слушателя событий
formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
// При отправке формы страница не должна перезагружаться.
    event.preventDefault();

    const formElements = event.currentTarget.elements;

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if(mail == '' || password == ''){
        alert('Все поля должны быть заполнены');
    }; 

// Собираем данные с формы в 1 обьект. Я не придумал как сделать это иначе, кроме как вот ручками записать.
    const objValue = {
        [formElements.email.name]: mail, 
        [formElements.password.name]: password,
    }
    console.log(objValue);

// Очищаю поля инпутов
    formEl.reset(); 

// Меседж который мы выводим, добавляю тут, что бы использовать переменную mail
    const successMsg = `<i class="fa-solid fa-circle-check toast-icon toast-icon__success"></i> ${mail} вошел в аккаунт`;

// Появление окна
const toast = document.createElement('div');
toast.classList.add('toast', 'toast__success');
toast.innerHTML = successMsg;
toastBox.appendChild(toast);

setTimeout(()=>{
    toast.remove();
},6000);
}; 
