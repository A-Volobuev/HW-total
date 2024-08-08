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

    async fetchBreeds() {
        const breedsUrl = `${BASE_URL}/breeds`

        const selectFetchBreeds = await fetch(breedsUrl, options);
        const resultSelectFetchBreeds = await selectFetchBreeds.json();

        return resultSelectFetchBreeds;
    }

    async fetchCatByBreed () {
        // настройки для запроса с сервера
        const selectBreedsUrl = `${BASE_URL}/images/search?breed_ids=${this.breedId}`

        const fetchCatByBreedInSelect = await fetch(selectBreedsUrl, options);
        const result = await fetchCatByBreedInSelect.json();

        return result;
    }

    get idBreed() {
        return this.breedId;
    }

    set idBreed(newBreedId) {
        this.breedId = newBreedId;
    }
}