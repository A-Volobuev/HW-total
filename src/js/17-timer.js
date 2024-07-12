import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const dateInput = document.getElementById('datetime-picker');

let selectedTime;
let timerIntervalId;

// выключаем кнопку до выбора даты
// startBtn.disabled = true;
// stopBtn.disabled = true;

// Запускаем
startBtn.addEventListener('click', () => {
    if(selectedTime < Date.now()){
        Notiflix.Notify.warning('Выберите дату в будущем');
        startBtn.disabled = true;
        startBtn.classList.add('button__timer-disabled');
        return;
    } else {
        Notiflix.Notify.success('Таймер запущен');
    };
    // Интервал обратного отсчета
    timerIntervalId = setInterval(() => {
    const timerTimes = convertMs(selectedTime - Date.now());
    
    timerDays.textContent = timerTimes.days;
    timerHours.textContent = timerTimes.hours;
    timerMinutes.textContent = timerTimes.minutes;
    timerSeconds.textContent = timerTimes.seconds;

    const timerSum = timerTimes.days + timerTimes.hours + timerTimes.minutes +timerTimes.seconds;
    
    if(timerSum == 0){
        clearInterval(timerIntervalId);
        // startBtn.disabled = false;
        dateInput.disabled = false;
        Notiflix.Notify.info('Можно запускать заново');
    }
}, 1000); 

startBtn.disabled = true;
startBtn.classList.add('button__timer-disabled');
dateInput.disabled = true;
stopBtn.disabled = false;
stopBtn.classList.remove('button__timer-disabled');

console.log(timerIntervalId);
}); 

// стопаем
stopBtn.addEventListener('click', () =>{
    clearInterval(timerIntervalId);
    startBtn.disabled = false;
    startBtn.classList.remove('button__timer-disabled');
    dateInput.disabled = false;
    stopBtn.disabled = true;
    stopBtn.classList.add('button__timer-disabled');
    Notiflix.Notify.info('Таймер остановлен');

    timerDays.textContent = '00';
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
});

// календарь в инпуте
flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    dateFormat: 'd.m.Y H:i',
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedTime = selectedDates[0];
        startBtn.disabled = false;
        startBtn.classList.remove('button__timer-disabled');
    },
});

//Функция счета значений
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}

// Принимает число, приводит к строке и добавляет в начало 0, если число меньше 2х
function pad(value) {
    return String(value).padStart(2, '0');
};
