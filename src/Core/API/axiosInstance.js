import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? process.env.PROD_URI : process.env.DEV_URI;

console.log(baseURL)

const api = axios.create({
    baseURL,
    headers: { 'Access-Control-Allow-Origin': '*' },
});

export default api;
