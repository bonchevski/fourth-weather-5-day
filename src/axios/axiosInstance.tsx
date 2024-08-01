import axios from 'axios';

// temp: TODO: Move the commented out code and baseURL to .env file
// https://openweathermap.org/img/wn/10d@2x.png - codes for the weather icons where 10d is the name of the icon

const axiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast", // Set a base URL
    timeout: 5000, // Set a timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the content type header
    },
});

export default axiosInstance;
