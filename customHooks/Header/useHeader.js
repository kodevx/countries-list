'use client'
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setSelectedRegion, setRefinedCountries } from '@/redux/reducers/countries';

import { getCountriesOfSelectedRegion } from '@/utils/countries';

const useHeader = (props) => {

    const dispatch = useAppDispatch();

    const { 
        selectedRegion, 
        refinedCountriesList,
        allCountries 
    } = useAppSelector(state => state.countries);

    const handleRegionAndCountries = useCallback(
        async (region) => {
            try {
                console.log("region callback invoked,",region)
                let refinedCountries = await getCountriesOfSelectedRegion(region, allCountries);
                
                dispatch(setSelectedRegion(region));
                dispatch(setRefinedCountries(refinedCountries));
            } catch(error){
                console.log('Region & Countries Update Callback',error);
            }
        },
        [dispatch, allCountries]
    );

    const isLinksActive = !!(refinedCountriesList && refinedCountriesList.length > 0);

    return {
        isLinksActive,
        handleRegionAndCountries,
        selectedRegion
    }
}

export default useHeader;
