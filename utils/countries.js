import { ALL } from '@/constants/constants';

export const getCountriesOfSelectedRegion = (region, countries) => {

    let refinedCountries = [];

    if(region == ALL) {
        refinedCountries = countries
    } else {
        refinedCountries = countries.filter(country => country.region === region);
    }

    return refinedCountries;
}
