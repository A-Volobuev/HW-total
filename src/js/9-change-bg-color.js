function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.

// 1. добавить добавим класс на боди, куда запишем изменение цвет----> Можно прям в боди
console.log(document.body.style.backgroundColor); 

// 2. Слушатель событий "клик" на кнопку button.change-color 
const btnChangeColor = document.querySelector('.js-change-color');
btnChangeColor.addEventListener('click', onBtnChangeColorClick)

// 3. Функция изменения цвета
function onBtnChangeColorClick(){
  document.body.style.backgroundColor = getRandomHexColor();

  currentColor.textContent = getRandomHexColor();
} 
// 4. вывод цвета в спан. ---> переношу в функцию, что бы значение изменялось при клике
const currentColor = document.querySelector('.js-color');
// currentColor.textContent = getRandomHexColor();

// ПОГУГЛИТЬ КАК ИЗ ХЕКС В ТЕКСТ ---> нашел только с подключением библиотек