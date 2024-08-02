// WeatherList.tsx
import { Card, Divider } from "antd";
import React, { useMemo } from "react";
import { WeatherData } from "../../types/types";
import WeatherCardHourly from "../WeatherCardHourly/WeatherCardHourly";
import { groupByDate } from "../../utils";

type WeatherListProps = {
  title: string;
  list: Array<WeatherData> | [];
};

const WeatherList: React.FC<WeatherListProps> = (props: WeatherListProps) => {
  const { title, list } = props;
  const groupedByDate = useMemo(() => groupByDate(list), [list]);
  // TODO: the object Keys can be moved to a utility fn that extracts them instead of having them here

  return (
    <Card title={title} bordered>
      {Object.keys(groupedByDate).map(date => (
        <div key={date}>
          <h3>{date}</h3>
          <Divider />
          <div className="flex flex-row container flex-wrap">
            {groupedByDate[date].map((weatherData: WeatherData) => (
              <WeatherCardHourly
                key={weatherData.dt}
                dt={weatherData.dt}
                dt_txt={weatherData.dt_txt}
                main={weatherData.main}
                weather={weatherData.weather}
                clouds={weatherData.clouds}
                wind={weatherData.wind}
                visibility={weatherData.visibility}
                pop={weatherData.pop}
                rain={weatherData.rain}
                sys={weatherData.sys}
              />
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default WeatherList;