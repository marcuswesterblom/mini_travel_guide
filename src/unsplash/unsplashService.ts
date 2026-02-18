import { UNSPLASH_ACCESS_KEY } from "../apiKeys";
import type { UnsplashData } from "./UnsplashData";

export const getImages = async (city:string): Promise<UnsplashData[]> => {
    const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${encodeURIComponent(city)}&per_page=5`);
    if(!response.ok) {
        throw new Error("Images couldn't be found");
    }
    const data = await response.json();
    return data.results as UnsplashData[];
}