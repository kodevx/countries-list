'use client'
import { useEffect, useTransition, useCallback} from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setAllCountries } from '@/redux/reducers/countries';
import usePagination from "../Pagination/usePagination";

const useHome = props => {

    const [isPending, startTransition] = useTransition();

    const dispatch = useAppDispatch();
    const { 
        selectedRegion, 
        refinedCountriesList, 
        allCountries 
    } = useAppSelector(state => state.countries);

    const [
        { currentPage, pageSize, totalPages }, 
        { handleCurrentPage, handlePageSizeAndTotalPages }
    ] = usePagination();

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
         [dispatch]
    ); 

    useEffect(() => {
        handleFetchCountries();
    }, [handleFetchCountries]);

    console.log("allCountries: ",allCountries);

    return {
        isPending,
        selectedRegion,
        countries: refinedCountriesList
    }
}

export default useHome;
