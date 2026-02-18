import type { CountryData } from "./country/CountryData";
import { getCountry } from "./country/countryServices";
import { countryHtml } from "./createHtml/countryHtml";
import { unsplashHtml } from "./createHtml/galleryHtml";
import { weatherHtml } from "./createHtml/weatherHtml";
import type { WeatherData } from "./weather/WeatherData";
import { getWeather } from "./weather/weatherServices";

const countryForm = document.getElementById("countryForm");
const countryContainer = document.getElementById("countryContainer")!;
const gallery = document.getElementById("galleryContainer");

countryForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const countryInput = document.getElementById("countryInput") as HTMLInputElement;
    const countrySearch = countryInput.value.trim().toLowerCase();

    try {
    const countries = await getCountry(countrySearch);
    const country = countries.find(c => c.name.common.toLowerCase().includes(countrySearch));

    if(!country) {
        alert("No matching country found");
        return;
    }

    const capital = country.capital?.[0];
    if(!capital) {
        alert("No capital available");
        return;
    }

    const weather = await getWeather(capital);

    renderTravelGuide(country, weather, capital);
    }catch (err) {
        alert("Something went wrong while fetching data");
    }
});

export const renderTravelGuide = async (country: CountryData, weather: WeatherData, city: string) => {
    if (!countryContainer) return;
    countryContainer.innerHTML = "";
    
        // Country HTML
        const countryElements = countryHtml(country);

        // Weather HTML
        const weatherElements = weatherHtml(weather);

        // Gallery HTML
        const unsplashElements = await unsplashHtml(city);

    countryContainer.append(...countryElements, ...weatherElements);
    if(gallery){
        // Reset gallery
        gallery.innerHTML = "";
        gallery?.append(...unsplashElements);
    }
}