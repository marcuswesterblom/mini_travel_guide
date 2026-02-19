import type { UnsplashData } from "./UnsplashData";


export const unsplashHtml = (images:UnsplashData[]): HTMLElement[] => {
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