import React from "react";
import { Card } from "../card/Card";
import "./WeatherDetail.css";
import { convertFromKelvinToCelsius, round } from "../../utils";
type WeatherDetailProps = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
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

export const WeatherDetail = (props: WeatherDetailProps) => (
  <div className="Wrapper">
    <Card>
      <span>Temperature</span> 
      <h3>{renderTemperature(props.temp)}</h3>
    </Card>
    <Card>
      <span>Feels Like</span> 
      <h3>{renderTemperature(props.feels_like)}</h3>
    </Card>
    <Card>
      <span>Minimum Temperature</span>
      <h3>{renderTemperature(props.temp_min)}</h3>
    </Card>
    <Card>
      <span>Maximum Temperature</span>
      <h3>{renderTemperature(props.temp_max)}</h3>
    </Card>
    <Card>
      <span>Pressure</span>
      <h3>{props.pressure ? props.pressure + 'Hg' : 'N/A'}</h3>
    </Card>
    <Card>
      <span>Humidity</span>
      <h3>{props.humidity ? props.humidity + '%' : 'N/A'}</h3>
    </Card>
  </div>
);
