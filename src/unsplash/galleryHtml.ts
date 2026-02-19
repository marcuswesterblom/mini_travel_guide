import type { UnsplashData } from "./UnsplashData";


export const unsplashHtml = (images: UnsplashData[]): HTMLElement => {
    const galleryContainer = document.createElement("div");
    galleryContainer.id = "galleryContainer";

    images.forEach(image => {
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        img.id = image.id;
        img.src = image.urls.small;
        img.alt = image.alt_description;

        imgContainer.appendChild(img);
        galleryContainer.appendChild(imgContainer);
    });

    return galleryContainer;
}