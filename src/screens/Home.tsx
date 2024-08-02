import React, { useEffect } from "react";
import Search from "antd/es/input/Search";
import CoordinatesForm from "../components/CoordinatesForm/CoordinatesForm";
import {
  fetchWeatherByCityName,
  fetchWeatherByCoordinates,
  selectCurrentWeather,
  selectIsLoading,
} from "../redux/weatherSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Empty, message, Typography } from "antd";
import WeatherList from "../components/WeatherList/WeatherList";
import { getLocation } from "../utils";

const Home: React.FC = () => {
  const weather = useAppSelector(selectCurrentWeather);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  const handleOnSearch = (value: string) => {
    dispatch(fetchWeatherByCityName(value));
  };

  useEffect(() => {
    const fetchWeatherByCurrentLocation = async () => {
        try {
          const { lat, lon } = await getLocation();
          const coordinates = { lat, lon };
          dispatch(fetchWeatherByCoordinates(coordinates));
        } catch (error) {
          message.error('Unable to retrieve your location');
        }
      };
  
      fetchWeatherByCurrentLocation();
  }, [dispatch])
  

  return (
    <div className="container flex flex-col ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <Typography.Title level={5}>Search by Coordinates</Typography.Title>
          <CoordinatesForm isLoading={isLoading} />
        </div>
        <div className="flex flex-col">
          <Typography.Title level={5}>Search by City Name</Typography.Title>

          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            loading={isLoading}
            onSearch={handleOnSearch}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center">
        {weather.cod === "200" ? (
          <WeatherList title={weather.city.name} list={weather.list} />
        ) : (
          <Empty
            className="justify-self-center"
            description={
              <Typography.Text>
                {weather.message ||
                  " Please input coordinates or city name to get weather data"}
              </Typography.Text>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Home;
