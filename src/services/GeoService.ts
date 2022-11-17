import { GEO_API_URL, WEATHER_API_KEY } from "../config";

const key = WEATHER_API_KEY;
const baseUrl = GEO_API_URL;

export const getGeoLocation = async (cityName: string) => {
    const url = `${baseUrl}?q=${cityName}&appid=${key}`;
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return [];
    }
  };