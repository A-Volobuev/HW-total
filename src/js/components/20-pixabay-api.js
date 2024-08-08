const axios = require('axios').default;

const API_KEY = '45308100-fb5f56041b1d1802d13a23a9f';
const BASE_URL = 'https://pixabay.com/api/';
const options = {
    params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: 0,
    }
};

export default class PixabayApi {
    constructor() {
        this.q = ''
        this.options = options;
    }

    // Запрос от сервера по инпуту
    async fetchImgByName() {
        const requestUrl = `${BASE_URL}?q=${this.q}`

        return await axios.get(requestUrl, this.options)
    }

    get request() {
        return this.q;
    } 

    set request(newRequest){
        this.q = newRequest;
    }

    assignPage(){
        options.params.page = 1;
    }

    addPage() {
        console.log(options.params.page)
        options.params.page += 1;
    }
}
