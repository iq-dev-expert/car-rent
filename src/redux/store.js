import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { carsReducer, carsSlice } from './reduxCarsList/carsSlise';
import { globalReducer, globalSlice } from './reduxGlobal/globalSlice';

const rootReduser = combineReducers({
  [carsSlice.name]: carsReducer,
  [globalSlice.name]: globalReducer,
});

export const store = configureStore({
  reducer: rootReduser,
});
