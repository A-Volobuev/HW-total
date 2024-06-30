import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// решение
const galleryContainer = document.querySelector('.gallery');
const imgItemsMarkup = createImgItemsMarkup(galleryItems);

// 1. Создаем разметку с карточками
  function createImgItemsMarkup(items) {
    return items
      .map(({ preview, description, original }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"  />
  </a>`;
      })
      .join('');
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
}

let gallery = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: `alt`,
  captionDelay: 250,
});

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