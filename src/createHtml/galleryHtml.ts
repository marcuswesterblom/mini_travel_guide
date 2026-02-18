import type { UnsplashData } from "../unsplash/UnsplashData";
import { getImages } from "../unsplash/unsplashService"

export const unsplashHtml = async (city:string): Promise<HTMLElement[]> => {
    
    const images: UnsplashData[] = await getImages(city);
    const elements: HTMLElement[] = [];

    images.forEach(image => {
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        img.id = image.id;
        img.src = image.urls.small;
        img.alt = image.alt_description;

        imgContainer.appendChild(img);
        elements.push(imgContainer);
    });

    return elements;
}