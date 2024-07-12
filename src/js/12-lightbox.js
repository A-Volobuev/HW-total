import { galleryItems } from './gallery-items.js';

// решение
const galleryContainer = document.querySelector('.gallery');
const imgItemsMarkup = createImgItemsMarkup(galleryItems);

// 1. Создаем разметку с карточками
function createImgItemsMarkup (gallery) {
    const markup = gallery.map(({preview, original, description}) => {
        return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
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
}

// Инициализация SimpleLightbox
// const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
// });
let gallery = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: `alt`,
    captionDelay: 250,
});