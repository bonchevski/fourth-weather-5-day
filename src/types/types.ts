type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type MainWeatherCharacteristics = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Clouds = {
  all: number;
};

export type City = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type WeatherData = {
  dt: number;
  main: MainWeatherCharacteristics;
  weather: Array<Weather> | [];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: {
    threeHours: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type WeatherState = {
  currentWeather: WeatherResponse;
  isLoading: boolean;
};

export type WeatherResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<WeatherData>;
  city: City;
};
