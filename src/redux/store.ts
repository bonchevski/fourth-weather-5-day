// store.ts
import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './weatherSlice';

const store = configureStore({
    reducer: {
        weather: currentWeatherReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;