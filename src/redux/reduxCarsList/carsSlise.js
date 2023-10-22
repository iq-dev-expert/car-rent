import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations/fetchCars';

const initialState = { items: [] };

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
