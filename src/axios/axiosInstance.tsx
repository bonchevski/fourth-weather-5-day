import axios from 'axios';

export const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

// I prefer to have the axios instance in a separate file
// so that I can use it in multiple places
// this is a simple axios instance with a base URL
// however one can use interceptors, headers etc
// as weall as auth with bearer tokens etc for jwt

// In a real world app I would probably prefer the approach of a singleton pattern for the axios instance

const axiosInstance = axios.create({
    baseURL: BASE_URL, 
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json', 
    },
});

export default axiosInstance;
