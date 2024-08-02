import {
  getWeatherByCityName,
  getWeatherByCoordinates,
} from "../axios/weatherServices/weatherServices";
import { WeatherResponse, WeatherState } from "./../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO: this state can possible have additional nodes for the details of the daily weather
// possibly there can be some utils/stateUtils that would split it into days and then have
// normal reducers to call and group from the main data upon clicking fx on a day/date

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


// TODO: these can be moved in a seperate file 
// in order to split the code and make it more readable

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

// END TODO


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

// TODO: I prefer selectors in a selectors.ts file in the same folder as the slice
// but for this example I will keep them here

export const selectCurrentWeather = (state: { weather: WeatherState }) =>
  state.weather.currentWeather;
export const selectIsLoading = (state: { weather: WeatherState }) =>
  state.weather.isLoading;
export default weatherSlice.reducer;
