'use client'
import { useCallback, useMemo } from "react";
import {  
    incrementCurrentPage, 
    setTotalPages,
    setCountriesToShow,
    resetPagination, 
} from '@/redux/reducers/countries';

import { useAppDispatch } from "@/redux/store";
import { getTotalPages } from "@/utils/countries";

export const usePaginationActions = () => {

    const dispatch = useAppDispatch();
    
    const handleCurrentPage = useCallback(
        () => {
            dispatch(
                incrementCurrentPage()
            )
        },
        [dispatch]
    );

    const handleTotalPages = useCallback(
        (totalItems, pageSize) => {
            dispatch(
                setTotalPages(
                    getTotalPages(totalItems, pageSize)
                )
            )
        },
        [dispatch]
    );

    const handleCountriesToShow = useCallback(
        (countriesCount) => {
            dispatch(
                setCountriesToShow(countriesCount)
            )
        },
        [dispatch]
    );

    const handleResetPagination = useCallback(
        () => {
            dispatch(
                resetPagination()
            )
        },
        [dispatch]
    );

    const api = useMemo(
        () => ({
            handleCurrentPage,
            handleTotalPages,
            handleCountriesToShow,
            handleResetPagination,
        }),
        [
            handleCurrentPage, 
            handleTotalPages, 
            handleCountriesToShow,
            handleResetPagination 
        ]
    );

    return [api];
}
