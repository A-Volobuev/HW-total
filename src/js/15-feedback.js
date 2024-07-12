// Добавить лодаш тротл 
import throttle from 'lodash.throttle'
import Notiflix from 'notiflix';


// 
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');



// сохраняем ключ для сторейджа
const STORAGE_KEY = 'feedback-form-state';
const feedbackFormData = {};


// вешаем слушателя событий
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
// Проверка на сохраненное сообщение
populateMessageOutput();



// Останавливаем поведение по умолчанию
// Убираем сообщение из хранилища
// Очищаем форму
function onFormSubmit(event) {
    event.preventDefault();

    if(textarea.value === '' || input.value === ''){
        Notiflix.Notify.failure('Заполните все поля');
    } else {
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);

        Notiflix.Notify.success('Комментарий отправлен');
    }

};

// Сохраняем сообщение
function onFormInput(event) {
    feedbackFormData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
};



// Получает значение из хранилища
function populateMessageOutput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    // Добавил, потому что если прям в getItem, то выдает ошибку
    const constructingMessage = JSON.parse(savedMessage);
    
    if(constructingMessage) {
        input.value = constructingMessage.email;
        textarea.value = constructingMessage.message;
        Notiflix.Notify.info('Сообщение было востановлено');
    }
}


