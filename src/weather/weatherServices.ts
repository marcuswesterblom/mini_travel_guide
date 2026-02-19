import { WEATHER_API_KEY } from "../apiKeys";
import type { WeatherData } from "./WeatherData";


export const getWeather = async (city:string):Promise<WeatherData> => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`);
    if(!response.ok) {
        throw new Error("Weather not found");
    }
    const data = await response.json();
    return data;
}