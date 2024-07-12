// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const DELAY = 1000;
// id для остановки
let changeColorIntervalId;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

// Делаем интервал для изменения цвета каждые 1 сек 
function onStartBtnClick() {
    changeColorIntervalId = setInterval(() => {
        // Изменяет цвет после нажатия на кнопку
    document.body.style.backgroundColor = getRandomHexColor();
        // Выключаем кнопку после первого нажатия
    startBtn.disabled = true;
    startBtn.classList.add('button__color-switcher-disabled'); 
    },DELAY);
}


function onStopBtnClick() {
    // Очищаем интервал (сохраняется цвет автоматически)
    clearInterval(changeColorIntervalId);
    // Включаем кнопку старт
    startBtn.disabled = false;
    startBtn.classList.remove('button__color-switcher-disabled');
}

// Получение случайного цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
