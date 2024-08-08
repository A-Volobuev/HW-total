const API_KEY = 'live_7ad8upyX21GZXAiarpBVFKI96kSct8KgO5N7x1ungdbJekziVwWJNouLsXsd0P7L';
const BASE_URL = 'https://api.thecatapi.com/v1';
const options = {
    headers: {
        'X-Api-Key': API_KEY,
    },
};

export default class CatApiService {
    constructor() {
        // 5. Сохраняем выбраную породу
        this.breedId = '';
    }

    // Запрос для селекта
    fetchBreeds() {
        // настройки для запроса с сервера
        const breedsUrl = `${BASE_URL}/breeds`

        // Запрос
        return fetch(breedsUrl, options)
            .then(resolt => {
                // console.log(resolt.ok)
                // Нашел только такой способ (создать самому ошибку), потому что иначе поймать ее через catch в 
                // основном джс файле я не знаю как (Срабатывает здесь на 21 строке и 30й)
                if(!resolt.ok){
                    throw new Error("Ошибка!");
                }
                return resolt.json()})
            .then(data => {
            console.log(data); 

            return data;
            });
    }

    // Запрос на информацию от селекта
    fetchCatByBreed () {
        // настройки для запроса с сервера
        const selectBreedsUrl = `${BASE_URL}/images/search?breed_ids=${this.breedId}`

        // Запрос
        return fetch(selectBreedsUrl, options)
        .then(resolt => {
            if(!resolt.ok){
                throw new Error("Ошибка!");
            }
            return resolt.json()})
        .then(data => {
            console.log(data);
            return data;
        })
    } 

    get idBreed() {
        return this.breedId;
    }

    set idBreed(newBreedId) {
        this.breedId = newBreedId;
    }
}

// export default // fetchBreeds - получаем породы кошек
// fetch(`${BASE_URL}/breeds`)
//     .then(resolt => resolt.json())
//     .then(data => {
//         console.log(data);

        // Добавляю здесь, потому что эта функция выполняется позже и данные с фетча не получить.
        // Добавляем в селкт выбор породы кошек
        // selectBreed.insertAdjacentHTML('beforeend', selectOptions(data))
//     });