import { getCountry } from "./country/countryServices";
import { countryHtml } from "./country/countryHtml";
import { unsplashHtml } from "./unsplash/galleryHtml";
import { weatherHtml } from "./weather/weatherHtml";
import { getWeather } from "./weather/weatherServices";
import { getImages } from "./unsplash/unsplashService";

const form = document.getElementById("countryForm");
const input = document.getElementById("countryInput") as HTMLInputElement;
const countryContainer = document.getElementById("countryContainer")!;
const gallery = document.getElementById("galleryContainer");

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputSearch = input.value.trim().toLowerCase();
    if (inputSearch) {
        renderTravelGuide(inputSearch);
    }
    input.value = "";
});

export const renderTravelGuide = async (location: string) => {
    
    countryContainer.innerHTML = "";

    if(gallery) {
        gallery.innerHTML = "";
    }
    try {
        const weather = await getWeather(location);
        const countries = await getCountry(weather.location.country);
        const country = countries[0];
        const images = await getImages(location);

        if(!country) {
            alert("No matching country found");
            return;
        }

    // --- CREATE HTML ---

        // Country HTML
        const countryElements = countryHtml(country);

        // Weather HTML
        const weatherElements = weatherHtml(weather);

        // Gallery HTML
        const unsplashElements = unsplashHtml(images);

    countryContainer.append(...countryElements, ...weatherElements);
    gallery?.append(...unsplashElements);
    
    } catch (err) {
        alert("Something went wrong while fetching data");
    }
}