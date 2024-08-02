import { MILLISECONDS_IN_SECOND } from "./constants";
import { WeatherData } from "./types/types";

export const groupByDate = (list: Array<WeatherData>): Record<string, Array<WeatherData>> => {
    return list.reduce((acc, weatherData) => {
        const date = new Date(weatherData.dt * MILLISECONDS_IN_SECOND).toISOString().split('T')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(weatherData);
        return acc;
    }, {} as Record<string, Array<WeatherData>>);
};

export const getLocation = (): Promise<{ lat: number; lon: number }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  };