import { Meridian } from "./Types";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../config";

const key = WEATHER_API_KEY;
const baseUrl = WEATHER_API_URL;

export const getLocalWeather = async (meridians: Meridian) => {
  const lat = meridians.lat;
  const lon = meridians.lon;
  const url = `${baseUrl}/weather/?lat=${lat}&lon=${lon}&appid=${key}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const getLocalWeatherForecast = async (meridians: Meridian) => {
  const lat = meridians.lat;
  const lon = meridians.lon;
  const url = `${baseUrl}/forecast/?lat=${lat}&lon=${lon}&appid=${key}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
};
