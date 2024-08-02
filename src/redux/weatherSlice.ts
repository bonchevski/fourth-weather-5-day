import {
  getWeatherByCityName,
  getWeatherByCoordinates,
} from "../axios/weatherServices/weatherServices";
import { WeatherResponse, WeatherState } from "./../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WeatherState = {
  currentWeather: {
    cod: "",
    message: 0,
    cnt: 0,
    list: [],
    city: {
      id: 0,
      name: "",
      coord: {
        lat: 0,
        lon: 0,
      },
      country: "",
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
  },
  isLoading: false,
};

export const fetchWeatherByCoordinates = createAsyncThunk(
  "weather/fetchWeatherByCoordinates",
  async (coordinates: { lat: number; lon: number }) => {
    const response = await getWeatherByCoordinates(
      coordinates.lat,
      coordinates.lon
    );
    return response;
  }
);
export const fetchWeatherByCityName = createAsyncThunk(
  "weather/fetchWeatherByCityName",
  async (cityName: string) => {
    try {
      const response = await getWeatherByCityName(cityName);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCoordinates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherByCoordinates.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(
      fetchWeatherByCoordinates.fulfilled,
      (state, action: PayloadAction<WeatherResponse>) => {
        state.isLoading = false;
        state.currentWeather = action.payload;
      }
    );
    builder.addCase(fetchWeatherByCityName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherByCityName.rejected, (state) => {
      state.isLoading = false;
      state.currentWeather.cod = "404";
    });
    builder.addCase(
      fetchWeatherByCityName.fulfilled,
      (state, action: PayloadAction<WeatherResponse>) => {
        state.isLoading = false;
        state.currentWeather = action.payload;
      }
    );
  },
});

export const selectCurrentWeather = (state: { weather: WeatherState }) =>
  state.weather.currentWeather;
export const selectIsLoading = (state: { weather: WeatherState }) =>
  state.weather.isLoading;
export default weatherSlice.reducer;
