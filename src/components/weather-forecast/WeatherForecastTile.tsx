import React from "react";
import { convertFromKelvinToCelsius, round } from "../../utils";
import "./WeatherForecastTile.css";
type WeatherForecastTileProps = {
  temp: number;
  icon: string;
  status: string;
  day: Date;
};

const renderTemperature = (temp: number) => {
  if (!temp) {
    return "N/A";
  }
  const converted = convertFromKelvinToCelsius(temp);
  // We want to round it on 1 decimal
  const rounded = round(converted, 1);
  return <span>{rounded}&deg;C</span>;
};

export const WeatherForecastTile = (props: WeatherForecastTileProps) => (
  <aside>
    <img
      src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      alt="weather"
    ></img>
    <p className="Day">{new Date(props.day).toDateString()}</p>
    <h2>{renderTemperature(props.temp)}</h2>
    <p className="Status">{props.status}</p>
  </aside>
);
