'use client'
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setSelectedRegion, setRefinedCountries } from '@/redux/reducers/countries';
import { PAGE_SIZE } from '@/constants/constants';

import { getCountriesOfSelectedRegion } from '@/utils/countries';
import { usePaginationActions } from '@/redux/actions/countries';

const useHeader = (props) => {

    const dispatch = useAppDispatch();

    const { 
        selectedRegion, 
        refinedCountriesList,
        allCountries 
    } = useAppSelector(state => state.countries);

    const [
        { handleResetPagination, handleTotalPages, handleCountriesToShow }
    ] = usePaginationActions();

    const handleRegionAndCountries = useCallback(
        async (region) => {
            try {

                let refinedCountries = await getCountriesOfSelectedRegion(region, allCountries);
                
                dispatch(setSelectedRegion(region));
                dispatch(setRefinedCountries(refinedCountries));

                handleResetPagination();

                handleTotalPages(refinedCountries.length, PAGE_SIZE);
                handleCountriesToShow(PAGE_SIZE)

            } catch(error){
                console.log('Region & Countries Update Callback',error);
            }
        },
        [
            dispatch, 
            allCountries,  
            handleResetPagination,
            handleTotalPages,
            handleCountriesToShow
        ]
    );

    const isLinksActive = !!(refinedCountriesList && refinedCountriesList.length > 0);

    return {
        isLinksActive,
        handleRegionAndCountries,
        selectedRegion
    }
}

export default useHeader;
