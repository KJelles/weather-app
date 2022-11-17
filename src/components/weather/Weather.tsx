import React from "react";
import { convertFromKelvinToCelsius, round } from "../../utils";
import "./Weather.css";

type WeatherProps = {
  temp?: number;
  icon?: string;
  location: string;
  status: string;
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

const renderIcon = (icon?: string) => {
  if (!icon) {
    return;
  }
  return (
    <img
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weather"
    ></img>
  );
};

export const Weather = ({ temp, icon, location, status }: WeatherProps) => (
  <>
    {renderIcon(icon)}
    <div className="InfoWrapper">
      <h1 className="Temperature">{renderTemperature(temp!)}</h1>
      <p className="Status">{status}</p>
      <p className="Location">{location}</p>
    </div>
  </>
);
