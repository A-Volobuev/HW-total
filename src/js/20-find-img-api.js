// Импортируем 
import PixabayApi from './components/20-pixabay-api';
import cardMarkup from '../templates/20-card-img.hbs';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


// Подвязываем разметку
const searchForm = document.getElementById('search-form');
const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


// Добавляем сюда наш класс запросов
const pixabayApi = new PixabayApi();
const lightbox = new SimpleLightbox('.photo-card a');


// Вешаем слушателей событий
searchForm.addEventListener('submit', onSearchFormSubmitClick);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);


// Функция при клике на поиска
async function onSearchFormSubmitClick(event) {
    event.preventDefault();
    galleryContainer.innerHTML = '';

    // Получаем данные с инпута
    const formInputValue = event.currentTarget.elements.searchQuery.value;
    pixabayApi.q = formInputValue;

    if(formInputValue === ''){
        Notiflix.Notify.warning('Пожалуйста введите запрос');
        return;
    }

    pixabayApi.assignPage()

    try{
        const response = await pixabayApi.fetchImgByName(pixabayApi.q);
        const { hits, totalHits } = response.data;

        if(totalHits === 0){
            throw new Error(
                'К сожалению по вашему запросу ничего не найдено'
            )
        };

        createCardImgMarkup(hits);
        pixabayApi.addPage();

        // Прокрутка сразу к картинкам
        const { height: cardHeight } = document
        .querySelector(".gallery")
        .firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 1,
            behavior: "smooth",
        });

        loadMoreBtn.classList.remove('is-hidden');

        Notiflix.Notify.success(`Ура, было найдено ${totalHits} изображений`);

    } catch (error) {
        console.log(error)
        Notiflix.Notify.failure(error.message);
    }
};


// Функция при клике на кнопку загрузки
async function onLoadMoreBtnClick() {
    try{
        const response = await pixabayApi.fetchImgByName();
        const { hits, totalHits } = response.data;

        createCardImgMarkup(hits);
        // Прокрутка сразу к картинкам
        const { height: cardHeight } = document
        .querySelector(".gallery")
        .firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 0.4,
            behavior: "smooth",
        });

        pixabayApi.addPage();

        // Достаем значения страницы и кол-во загружаемых элементов с настроек запроса
        const {page, per_page} = pixabayApi.options.params;

        if(page * per_page> totalHits){
            loadMoreBtn.classList.add('is-hidden');
            throw new Error(
                'К сожалению это все доступыне фото по вашему запросу'
            )
        }

    } catch (error) {
        console.log(error)
        Notiflix.Notify.failure(error.message);
    }
}


// функция создания разметки
function createCardImgMarkup (arr) {
    const markup = arr.map(item => cardMarkup(item)).join('');

    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

