import type { CountryData } from "./CountryData";

export const countryHtml = (country: CountryData) => {
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

        return [flag, countryName, capital, population, language, currencies];
}