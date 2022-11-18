import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";
import "./WeatherForecast.css";
import { List, City } from "../../services/Types";
import { WeatherForecastTile } from "./WeatherForecastTile";

type WeatherForecastProps = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

const groupDataByDate = (list: List[]) => {
  const grouped = list.reduce((m, o) => {
    let found = m.find(
      (p) =>
        new Date(p.dt_txt).toDateString() === new Date(o.dt_txt).toDateString()
    );
    if (found) {
      // Find the maximum temp of the day
      found.main.temp = Math.max(found.main.temp, o.main.temp);
    } else {
      m.push(o);
    }
    return m;
  }, [] as List[]);
  return grouped;
};

export const WeatherForecast = (props: WeatherForecastProps) => {
  const [groupedForecast, setGroupedForecast] = useState<List[]>([]);

  useEffect(() => {
    if (!props.list) return;
    setGroupedForecast(groupDataByDate(props.list));
  }, [props.list]);

  return (
    <div className="ForecastWrapper">
      {groupedForecast.map((day, index) => (
        <Card key={index}>
          <WeatherForecastTile temp={day.main.temp} icon={day.weather[0].icon} status={day.weather[0].description} day={day.dt_txt} />
        </Card>
      ))}
    </div>
  );
};
