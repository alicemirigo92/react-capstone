import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './Slice/countrySlice';
import detailReducer from './Api';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    country: detailReducer,
  },
});

export default store;
