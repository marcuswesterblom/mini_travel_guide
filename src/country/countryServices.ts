import type { CountryData } from "./CountryData";

export const getCountry = async (country:string): Promise<CountryData[]> => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error("Country not found");
    }

    return data;
}