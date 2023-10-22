import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer, carsSlice } from './reduxCarsList/carsSlise';

const rootReduser = combineReducers({ [carsSlice.name]: carsReducer });

export const store = configureStore({
  reducer: rootReduser,
});
