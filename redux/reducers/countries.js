import { createSlice } from "@reduxjs/toolkit";

import { getCountriesOfSelectedRegion } from '@/utils/getRefinedCountries';

const initialState = {
    selectedRegion: '',
    refinedCountries: [],
    allCountries: [],
    pageSize: 14,
    totalCountriesCount: 0
}

const countriesSlice = createSlice({
    name: countries,
    initialState,
    reducers:  {
        setAllCountries: (state, action) => {
            return {
                ...state,
                selectedRegion: 'All',
                countriesOfSelectedRegion: action.payload.countries,
                allCountries: action.payload.countries,
                pageSize: 14,
                totalCountriesCount: action.payload.countries.length
            }
        },
        setSelectedRegion: (state, action) => {
            let countries = getCountriesOfSelectedRegion(state.allCountries, action.payload.region);

            return {
                ...state,
                selectedRegion: action.payload.region,
                refinedCountries: countries,
                totalCountriesCount: countries.length
            }
        }
    }
})

export const { setAllCountries, setSelectedRegion } = countriesSlice.actions;

export default countriesSlice.reducer;
