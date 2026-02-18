export type CountryData = {
    name: {
        common: string;
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    capital: string[];
    flags: { png: string };
    languages: { 
        [key:string]:string;
    };
    population: number;
};