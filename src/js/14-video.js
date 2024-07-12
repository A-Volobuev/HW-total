// Добавить лодаш тротл 
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const STORAGE_KEY = "videoplayer-current-time";

//---1. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, 
    // но учти что у тебя плеер добавлен как npm пакет, а не через CDN.

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
        }
});

// Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
const saveTimeThrottle = throttle((currentTime) => {
    localStorage.setItem(STORAGE_KEY, currentTime);
}, 1000);

// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
player.on('timeupdate', function() {
    player.getCurrentTime().then(function(currentTime) {
        saveTimeThrottle(currentTime);
    });
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

