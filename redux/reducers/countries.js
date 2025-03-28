import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRegion: '',
    refinedCountriesList: [],
    allCountries: [],
    pageSize: 14,
    totalCountriesCount: 0
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setAllCountries: (state, action) => {
            return {
                ...state,
                selectedRegion: 'All',
                refinedCountriesList: action.payload,
                allCountries: action.payload,
                pageSize: 14,
                totalCountriesCount: action.payload.length
            }
        },
        setSelectedRegion: (state, action) => {
            return {
                ...state,
                selectedRegion: action.payload,
            }
        },
        setRefinedCountries: (state, action) => {
            return {
                ...state,
                refinedCountriesList: action.payload,
                totalCountriesCount: action.payload.length
            }
        }
    }
});

export const { setAllCountries, setSelectedRegion, setRefinedCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
