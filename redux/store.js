import { configureStore, combineReducers } from "@reduxjs/toolkit";

import countriesReducer from '@/redux/reducers/countries';
import userReducer from '@/redux/reducers/users';

const store = configureStore({
     reducer: combineReducers({
          countriesReducer,
          userReducer
     })
});

export default store;
