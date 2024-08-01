interface MainWeatherCharacteristics {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
}

interface Clouds { 
all : number;
}

interface City {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    }
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;

}

type WeatherData = {
    dt: number;
    main: MainWeatherCharacteristics;
    weather: Array<Weather> | [];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain: {
        threeHours: number;
    }
    sys: {
        pod: string;
    }
    dt_txt: string;
}

type WeatherResponse = { 
    cod: string;
    message: number;
    cnt: number;
    list: Array<WeatherData>;
    city: City;
}