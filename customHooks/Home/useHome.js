'use client'
import { useEffect, useTransition, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePaginationActions } from "@/redux/actions/countries";
import { setAllCountries } from '@/redux/reducers/countries';

const useHome = props => {

    const [isPending, startTransition] = useTransition();

    const { 
        currentPage, 
        pageSize, 
        totalPages,
        selectedRegion, 
        countriesToShow,
        refinedCountriesList 
    } = useAppSelector(state => state.countries);

    const { isSignedIn } = useAppSelector(state => state.users);

    console.log("currentPage: ",currentPage);
    console.log("totalPages: ",totalPages);

    const dispatch = useAppDispatch();

    const [
        { handleTotalPages, handleCurrentPage, handleCountriesToShow }
    ] = usePaginationActions();

    const handleLoadMore = useCallback(
        () => {
            console.log("currentPage: ",currentPage)
            console.log("totalPage: ",totalPages)

            if(currentPage + 1 < totalPages) {
                handleCountriesToShow(pageSize * (currentPage + 1));
                handleCurrentPage();     // Increment Current Page
            } else if(currentPage + 1 === totalPages) {
                handleCountriesToShow(refinedCountriesList.length);
                handleCurrentPage();
            }
        }, 
        [
            handleCountriesToShow,
            currentPage, 
            totalPages, 
            pageSize,
            refinedCountriesList,
            handleCurrentPage
        ]
    );

    const handleFetchCountries = useCallback(
         () => {
            try {
                startTransition(async () => {
                    const countries = await fetch(process.env.NEXT_PUBLIC_REST_ENDPOINT_URL).then((res) => res.json());

                    console.log("countries: ",countries);

                    if(countries && countries.length > 0) {
                        dispatch(
                            setAllCountries(countries)
                        )
                        handleTotalPages(countries.length, pageSize);
                    } else {
                        dispatch(
                            setAllCountries([])
                        )
                    }
                })
            } catch(error) {
                console.log('Countries Fetch API Error: ',error)
            }
        },
        [
            dispatch, 
            pageSize,
            handleTotalPages
        ]
    ); 

    useEffect(() => {
        handleFetchCountries();
    }, [handleFetchCountries]);

    const isLoadMoreDisabled = !!(currentPage === totalPages);

    return {
        isPending,
        isSignedIn,
        selectedRegion,
        handleLoadMore,
        countriesToShow,
        isLoadMoreDisabled,
        countries: refinedCountriesList
    }
}

export default useHome;
