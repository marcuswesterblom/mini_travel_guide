import type { WeatherData } from "../weather/WeatherData";

export const weatherHtml = (weather:WeatherData) => {
    const weatherContainer = document.createElement("div");
    const city = document.createElement("p");
    const localTime = document.createElement("p");
    const degreeCelsius = document.createElement("p");
    const weatherIcon = document.createElement("img");
    const weatherCondition = document.createElement("p");

    city.textContent = weather.location.name;
    localTime.textContent = weather.location.localtime;
    degreeCelsius.textContent = weather.current.temp_c.toString();
    weatherIcon.src = weather.current.condition.icon;
    weatherIcon.alt = weather.current.condition.text;
    weatherCondition.textContent = weather.current.condition.text;

    weatherContainer.append(
        city,
        localTime,
        degreeCelsius,
        weatherIcon,
        weatherCondition
    )
    
    return [city, localTime, degreeCelsius, weatherIcon, weatherCondition];
}