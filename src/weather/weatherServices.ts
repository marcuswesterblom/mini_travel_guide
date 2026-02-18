import { WEATHER_API_KEY } from "../apiKeys";
import type { WeatherData } from "./WeatherData";


export const getWeather = async (location:string):Promise<WeatherData> => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
    if(!response.ok) {
        throw new Error("Weather not found");
    }
    const data = await response.json();
    return data;
}