import { ALL } from '@/constants/constants';

export const getCountriesOfSelectedRegion = (region, countries) => {

    let refinedCountries = [];

    if(region !== ALL || region !== '') {
        refinedCountries = countries.filter(country => country.region === region);
    } else {
        refinedCountries = countries
    }

    return refinedCountries || countries;
}
