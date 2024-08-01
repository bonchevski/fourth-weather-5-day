import axiosInstance from "../axiosInstance";

export const getWeatherByCoordinates = async (latitude: number, longitude: number) => {
    try {
        const response = await axiosInstance.get(`?lat=${latitude}&lon=${longitude}&appid=84f6deef9696c006d6838d2ad7c68f20`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}