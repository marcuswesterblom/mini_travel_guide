import type { CountryData } from "./CountryData";

export const countryHtml = (country: CountryData) => {
    
    const countryContainer = document.createElement("div");

    const countryHeader = document.createElement("div");
    const countryName = document.createElement("h2");
    const flag = document.createElement("img");
    const flagContainer = document.createElement("div");
    const heartIcon = document.createElement("img");
    const heartIconHover = document.createElement("img");
    const heartContainer = document.createElement("div");

    const capitalContainer = document.createElement("div");
    const capitalIconContainer = document.createElement("div");
    const capitalText = document.createElement("p");
    const capitalInfo = document.createElement("h3");
    const capitalTextContainer = document.createElement("div");

    const capitalIcon = document.createElement("img");
    const populationIcon = document.createElement("img");
    const languageIcon = document.createElement("img");
    const currencyIcon = document.createElement("img");

    const populationContainer = document.createElement("div");
    const populationIconContainer = document.createElement("div");
    const populationText = document.createElement("p");
    const populationInfo = document.createElement("h3");
    const populationTextContainer = document.createElement("div");

    const languageContainer = document.createElement("div");
    const languageIconContainer = document.createElement("div");
    const languageText = document.createElement("p");
    const languageInfo = document.createElement("h3");
    const languageTextContainer = document.createElement("div");

    const currencyContainer = document.createElement("div");
    const currencyIconContainer = document.createElement("div");
    const currencyText = document.createElement("p");
    const currencyInfo = document.createElement("h3");
    const currencyTextContainer = document.createElement("div");

    // ICONS
    heartIcon.className = "svg";
    heartIconHover.className = "svg";
    capitalIcon.className = "svg";
    populationIcon.className = "svg";
    languageIcon.className = "svg";
    currencyIcon.className = "svg";

    const lineBreak = document.createElement("span");

    // --- Added ID to HTML elements ---
    countryContainer.id = "countryContainer";
    
    countryHeader.id = "countryHeader";
    flagContainer.id = "flagContainer";
    heartContainer.id = "heartContainer";
    countryName.id = "countryName";

    capitalContainer.id = "capitalContainer";
    capitalIconContainer.id = "capitalIconContainer";
    capitalText.id = "capitalText";
    capitalInfo.id = "capitalInfo";

    populationContainer.id = "populationContainer";
    populationIconContainer.id = "populationIconContainer";
    populationText.id = "populationText";
    populationInfo.id = "populationInfo";

    languageContainer.id = "languageContainer";
    languageIconContainer.id = "languageIconContainer";
    languageText.id = "languageText";
    languageInfo.id = "languageInfo";

    currencyContainer.id = "currencyContainer";
    currencyIconContainer.id = "currencyIconContainer";
    currencyText.id = "currencyText";
    currencyInfo.id = "currencyInfo";

    lineBreak.id = "break";

    // --- Apply data to HTML elements ---

    flag.src = country.flags.png;
    flag.alt = `Flag: ${country.name.common}`;
    flag.dataset.country = country.name.common;

    countryName.textContent = country.name.common;

    capitalText.textContent = "Capital";
    capitalInfo.textContent = country.capital[0];

    populationText.textContent = "Population";
    populationInfo.textContent = country.population.toLocaleString();

    languageText.textContent = "Language";
    languageInfo.textContent = Object.values(country.languages).join(", ");

    currencyText.textContent = "Currency";
    currencyInfo.textContent = Object.values(country.currencies)
        .map(c => `${c.name} (${c.symbol})`)
        .join(", ");
    // ICONS

    heartIcon.src = "/assets/icons/heart-svgrepo-com.svg";
    heartIconHover.src = "/assets/icons/heart-svgrepo-com_hover.svg";
    capitalIcon.src = "/assets/icons/location-pin-svgrepo-com.svg";
    populationIcon.src = "/assets/icons/users-svgrepo-com.svg";
    languageIcon.src = "/assets/icons/annotation-svgrepo-com.svg";
    currencyIcon.src = "/assets/icons/dollar-sign-svgrepo-com.svg";


    //--- APPEND ---

    // ICON CONTAINERS
    heartContainer.append(
        heartIcon, 
        heartIconHover
    );

    capitalIconContainer.appendChild(capitalIcon);
    populationIconContainer.appendChild(populationIcon);
    languageIconContainer.appendChild(languageIcon);
    currencyIconContainer.appendChild(currencyIcon);

     // INFO BLOCKS
    capitalTextContainer.append(
        capitalText,
        capitalInfo
    );

    capitalContainer.append(
        capitalIconContainer,
        capitalTextContainer
    );

      populationTextContainer.append(
        populationText,
        populationInfo
    );

    populationContainer.append(
        populationIconContainer,
        populationTextContainer
    );

      languageTextContainer.append(
        languageText,
        languageInfo
    );

    languageContainer.append(
        languageIconContainer,
        languageTextContainer
    );

      currencyTextContainer.append(
        currencyText,
        currencyInfo
    );

    currencyContainer.append(
        currencyIconContainer,
        currencyTextContainer
    );

    flagContainer.appendChild(flag);

    countryHeader.append(
        flagContainer, 
        countryName,
        heartContainer
    );

    countryContainer.append(
        capitalContainer,
        populationContainer,
        languageContainer,
        currencyContainer,
        lineBreak
    );


        return countryContainer;
}