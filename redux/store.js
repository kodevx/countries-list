import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import countriesReducer from '@/redux/reducers/countries';
import userReducer from '@/redux/reducers/users';

const rootReducer =  combineReducers({ 
     countries: countriesReducer,         
     user: userReducer
})

const store = configureStore({
     reducer: rootReducer
});

export default store;

export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
