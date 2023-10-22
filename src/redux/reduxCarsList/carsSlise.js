import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {},
});

export const carsReducer = carsSlice.reducer;
