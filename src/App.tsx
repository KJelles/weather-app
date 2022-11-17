import React, { useEffect, useState } from "react";
import "./App.css";
import { Weather } from "./components/weather/Weather";
import { WeatherDetail } from "./components/weather-detail/WeatherDetail";
import { WeatherForecast } from "./components/weather-forecast/WeatherForecast";
import { Card } from "./components/card/Card";
import { getGeoLocation } from "./services/GeoService";
import { Search } from "./components/search/Search";
import {
  getLocalWeather,
  getLocalWeatherForecast,
} from "./services/WeatherService";
import {
  Meridian,
  WeatherInfo,
  Forecast,
  List,
  GeoLocation,
} from "./services/Types";

function App() {
  const [geo, setGeo] = useState("");
  const [location, setLocation] = useState("");
  // lat, long
  const [meridians, setMeridians] = useState<Meridian>();
  const [info, setInfo] = useState<WeatherInfo>();
  const [forecast, setForecast] = useState<Forecast>();

  useEffect(() => {
    if (geo.length === 0) {
      return;
    }
    getGeoLocation(geo)
      .then((res) => {
        // Unfortunately we have to access the first element in the array
        const result: GeoLocation = res[0];
        setMeridians({ lat: result.lat, lon: result.lon });
        setLocation(result.name);
      })
      .catch((error) => console.error(error));
  }, [geo]);

  useEffect(() => {
    if (!meridians) {
      return;
    }
    getLocalWeather(meridians)
      .then((res: WeatherInfo) => setInfo(res))
      .catch((error) => console.error(error));

    getLocalWeatherForecast(meridians)
      .then((res: Forecast & { list: List[] }) => setForecast(res))
      .catch((error) => console.error(error));
  }, [meridians]);

  const getGeoFromSearch = async (location: string) => {
    setGeo(location);
  };

  return (
    <div className="App">
      <Search getGeo={getGeoFromSearch} />
      <div className="WeatherGrid">
        <div className="Weather">
          <Card header="Current">
            <Weather
              temp={info?.main?.temp}
              icon={info?.weather && info?.weather[0].icon}
              location={location}
              status={info?.weather[0].description!}
            />
          </Card>
        </div>
        <div className="WeatherDetail">
          <Card header="Details">
            <WeatherDetail {...info?.main!} />
          </Card>
        </div>
        <div className="WeatherForecast">
          <Card header="Forecast">
            <WeatherForecast {...forecast!} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
