import axios from 'axios';

const api = axios.create({
    baseURL: 'https://63dfe74e59bccf35dabbe77c.mockapi.io/'
});

export default api;