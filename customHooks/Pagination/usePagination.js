'use client'
import { useCallback, useReducer, useMemo } from "react";

const INCREMENT_PAGE = 'increment_page';
const SET_PAGE_SIZE_AND_TOTAL_PAGES = 'set_page_size_and_total_pages';

const initialState = {
    currentPage: 1,
    pageSize: 0,
    totalPages: 0
}

const reducer = (state, action) => {

    switch(action.type) {
        case INCREMENT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        }
        case SET_PAGE_SIZE_AND_TOTAL_PAGES: {
            return {
                ...state,
                pageSize: action.payload.pageSize,
                totalPages: action.payload.totalPages
            }
        }
    }
}

const usePagination = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleCurrentPage = useCallback(
        () => {
            dispatch(INCREMENT_PAGE)
        },
        []
    );

    const handlePageSizeAndTotalPages = useCallback(
        (pageSize, totalPages) => {
            dispatch(
                SET_PAGE_SIZE_AND_TOTAL_PAGES, 
                { pageSize, totalPages }
            )
        },
        []
    );

    const api = useMemo(
        () => ({
            handleCurrentPage,
            handlePageSizeAndTotalPages
        }),
        [handleCurrentPage, handlePageSizeAndTotalPages]
    );

    return [state, api];
}

export default usePagination;
