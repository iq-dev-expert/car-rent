import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://653234e44d4c2e3f333dc4bb.mockapi.io/api/v1';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
