import React from "react";
import { WeatherData } from "../../types/types";
import { Card } from "antd";


const WeatherCardHourly: React.FC<WeatherData> = (props: WeatherData) => {
  const { dt_txt, main, weather, clouds, wind, visibility, pop } =
    props;

  return (
    <Card className="m-2" title={dt_txt} bordered style={{ width: 300 }}>
      <div className="flex flex-col">
        <div className="flex flex-row border-b-2">
          <img
            src={`${import.meta.env.VITE_ICON_URL}${weather[0].icon}.png`}
            alt={weather[0].description}
          />
          {weather[0].description}
        </div>
        <div className="flex flex-row border-b-2">
          <p>Temperature: {main.temp}°C</p>
        </div>
        <div className="flex flex-row border-b-2">
          <p>Feels like: {main.feels_like}°C</p>
        </div>
        <div className="flex flex-row border-b-2">
          <p>Humidity: {main.humidity}%</p>
        </div>
        <div className="flex flex-row border-b-2">
          <p>Cloudiness: {clouds.all}%</p>
        </div>
        <div className="flex flex-row border-b-2">
          <p>Wind: {wind.speed} m/s</p>
        </div>
        <div className="flex flex-row border-b-2">
          <p>Visibility: {visibility} m</p>
        </div>
        <div className="flex flex-row border-b-2">
          <p>Probability of precipitation: {pop}%</p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCardHourly;
