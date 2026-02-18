import type { CountryData } from "./country/CountryData";
import { getCountry } from "./country/countryServices";
import type { WeatherData } from "./weather/WeatherData";
import { getWeather } from "./weather/weatherServices";

const countryForm = document.getElementById("countryForm");
const countryContainer = document.getElementById("countryContainer")!;

countryForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const countryInput = document.getElementById("countryInput") as HTMLInputElement;
    const countrySearch = countryInput.value.trim().toLowerCase();

    const countries = await getCountry(countrySearch);

    const country = countries.find(c => c.name.common.toLowerCase() === countrySearch);

    if(!country)return;

    const capital = country.capital?.[0];
    if(!capital) return;

    const weather = await getWeather(capital);

    renderTravelGuide(country, weather);
});

export const renderTravelGuide = (country: CountryData, weather: WeatherData) => {
    if (!countryContainer) return;
    countryContainer.innerHTML = "";
    // Country
    const flag = document.createElement("img");
    const countryName = document.createElement("h2");
    const capital = document.createElement("h3");
    const population = document.createElement("h3");
    const language  = document.createElement("h3");
    const currencies = document.createElement("h3");

    flag.src = country.flags.png;
    flag.alt = country.name.common;
    countryName.textContent = country.name.common;
    capital.textContent = country.capital?.[0];
    population.textContent = country.population.toLocaleString();
    language.textContent = Object.values(country.languages ?? {}).join(",");
    currencies.textContent = Object.values(country.currencies ?? {})
        .map(c => `${c.name} (${c.symbol})`)
        .join(",");

        //Weather
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
    countryContainer.append(flag, countryName, capital, population, language, currencies, weatherContainer);
}