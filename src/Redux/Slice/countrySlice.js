/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const api = await fetch('https://restcountries.com/v3.1/region/europe');
  const data = await api.json();
  return data;
});

export const fetchCountry = createAsyncThunk('data/fetchCountry', async (country) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const result = await response.json();
  return result;
});

const countrySlice = createSlice({
  name: 'countrySlice',
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export const { addCountry } = countrySlice.actions;
export default countrySlice.reducer;
