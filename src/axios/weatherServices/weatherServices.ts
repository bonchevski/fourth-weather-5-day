import axiosInstance, { API_KEY } from "../axiosInstance";

export const getWeatherByCoordinates = async (latitude: number, longitude: number) => {
    try {
        const response = await axiosInstance.get(`?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const getWeatherByCityName = async (cityName: string) => {
    try {
        const response = await axiosInstance.get(`?q=${cityName}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        return error.response.data
    }
}

