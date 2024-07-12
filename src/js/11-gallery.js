import { galleryItems } from './gallery-items.js';

// решение
const galleryContainer = document.querySelector('.gallery');
const imgItemsMarkup = createImgItemsMarkup(galleryItems);

// 1. Создаем разметку с карточками
function createImgItemsMarkup (gallery) {
    const markup = gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</li>
        `;
    });

    return markup.join('');
}

    //1.1 Добавляем карточки в код 
galleryContainer.innerHTML = imgItemsMarkup;


// 2. Реализация делегирования на ul.gallery 
galleryContainer.addEventListener('click', onImgClick)
function onImgClick(event) {
    if(event.target.nodeName !=='IMG'){
        return;
    }
    // прерываем событие открытия ссылки
    event.preventDefault();
    // Вводим в переменную получение оригинальной ссылки
    const originalImg = event.target.dataset.source;
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
    basicLightbox.create(`
		<img width="1400" height="900" src="${originalImg}">
	`).show()
}

// 5.Попытки сделать закрытие через еск
window.addEventListener('keydown', onOpenOriginalImgEscapePress)
function onOpenOriginalImgEscapePress(event) {
    if(event.key !=='Escape'){
        return;
    }
    // Обьявляю тут, что бы проверять при нажатии кнопки
    const originalImgIsOpen = document.querySelector('.basicLightbox--visible')
    if(originalImgIsOpen !== null){
            // Убирает только класс
        // originalImgIsOpen.classList.remove('basicLightbox--visible');
        originalImgIsOpen.remove();
    }
    return;
}