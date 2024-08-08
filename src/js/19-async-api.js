// Импортирую настройки select из хбс
import '../scss/19-api.scss'
import CatApiService from './components/19-async-cat-api';
import createOptionsInSelect from '../templates/19-select-option.hbs';
import informationBlockMarkup from '../templates/19-informative-block.hbs';
import { Report } from 'notiflix/build/notiflix-report-aio';

// Привязываем элементы 
const selectBreed = document.querySelector('.breed-select');
const informativeBlock = document.querySelector('.cat-info');
const decorativeOption = document.querySelector('.decorative-option');
const loader = document.querySelector('.container-loader');

// Добавляем сюда наш класс запросов
const catApiService = new CatApiService();

// Слушатель событий на селектор
selectBreed.addEventListener('change', onSelectBreedChange);
    //Добавил что бы при первом клике убрать декоративный пустой option с select 
selectBreed.addEventListener('click', function () {
    decorativeOption.classList.add('is-hiden');
});

//------ Функция при выборе на селекте породы 
function onSelectBreedChange(e) {
    // Сохраняем выбранную в переменную, для дальнейшей загрузки полной информации
    catApiService.breedId = e.currentTarget.value;

    loader.classList.remove('is-hiden');
    
    // Добавляем разметку на конкретную породу
    catApiService.fetchCatByBreed()
    .then(data => {
        // Очищаем страницу при выборе новой породы
        clearInformationBlock();

        createInformationBlockMarkup(data);

        loader.classList.add('is-hiden')
    })
    .catch(error => {
        Report.failure(
            'Ошибка',
            `${error}`,
            'Okay',
        );
    });
}

// 3. создаем функцию запроса и добавляем выбор в селект
function selectOption() {
    selectBreed.classList.add('is-hiden')


    catApiService.fetchBreeds()
        .then(addSelectBreed)
        .catch(error => {
            Report.failure(
                'Ошибка',
                `${error}`,
                'Okay',
                );})

    loader.classList.add('is-hiden')
    selectBreed.classList.remove('is-hiden')
}
// 3. Вызываем фукнцию
selectOption();

// 3. Функция добавления option в select
function addSelectBreed (data) {
    selectBreed.insertAdjacentHTML('beforeend', createOptionsInSelect(data))
}

// 7. Функция добавляет разметку на страницу
function createInformationBlockMarkup (data) {
    informativeBlock.insertAdjacentHTML('beforeend',informationBlockMarkup(data)) 
}

// 7. Функция очистки разметки 
function clearInformationBlock () {
    informativeBlock.innerHTML = '';
}


// 1. Получаем ключ
// 2. Делаем Гет запрос
// 3. При успешном запросе, необходимо наполнить select.breed-select опциями так, чтобы value опции содержал id породы,
    //  а в интерфейсе пользователю отображалось название породы. 
// 4.Когда пользователь выбирает опцию в селекте, необходимо выполнять запрос за полной информацией о коте на ресурс
    //  https://api.thecatapi.com/v1/images/search. Не забудь указать в этом запросе параметр строки запроса breed_ids 
    // с идентификатором породы.
// 5. Сохраняем выбраную породу в breedId
// 6. fetchCatByBreed(breedId) которая ожидает идентификатор породы, делает HTTP-запрос и возвращает промис с данными 
    // о коте - результатом запроса.
// 7. Если запрос был успешный, под селектом, в блоке div.cat-info появляется изображение и развернутая информация о 
    // коте: название породы, описание и темперамент.