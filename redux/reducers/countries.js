import { createSlice } from "@reduxjs/toolkit";
import { PAGE_SIZE } from '@/constants/constants';

const initialState = {
    selectedRegion: '',
    refinedCountriesList: [],
    allCountries: [],
    currentPage: 1,
    totalPages: 0,
    countriesToShow: PAGE_SIZE,
    pageSize: PAGE_SIZE
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
                allCountries: action.payload
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
                refinedCountriesList: action.payload
            }
        },
        incrementCurrentPage: (state, action) => {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        },
        setTotalPages: (state, action) => {
            return {
                ...state,
                totalPages: action.payload
            }
        },
        setCountriesToShow: (state, action) => {
            return {
                ...state,
                countriesToShow: action.payload
            }
        },
        resetPagination: (state, action) => {
            return {
                ...state,
                currentPage: 1,
                totalPages: 0,
                pageSize: PAGE_SIZE
            }
        },
    }
});

export const { 
    setAllCountries, 
    setSelectedRegion, 
    setRefinedCountries, 
    incrementCurrentPage, 
    setTotalPages, 
    setCountriesToShow, 
    resetPagination, 
} = countriesSlice.actions;

export default countriesSlice.reducer;
