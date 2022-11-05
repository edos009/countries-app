import { createSlice } from "@reduxjs/toolkit";

const countryInfoSlice = createSlice({
  name: "countryInfo",
  initialState: {
    country: {},
    isFetching: false,
    error: null,
  },
  reducers: {
    getCountryRequest(state) {
      state.isFetching = true;
    },
    getCountrySuccess(state, action) {
      const { country } = action.payload;

      state.isFetching = false;
      state.country = country;
    },
    getCountryError(state, action) {
      const { error } = action.payload;

      state.isFetching = false;
      state.error = error;
    },
  },
});

export const { getCountryRequest, getCountrySuccess, getCountryError } =
  countryInfoSlice.actions;
export default countryInfoSlice.reducer;
