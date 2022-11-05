import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isFetching: false,
    error: null,
    inputValue: "",
    checkedCountries: [],
    removedCountries: [],
  },
  reducers: {
    getCountriesRequest(state, action) {
      state.isFetching = true;
    },
    getCountriesSuccess(state, action) {
      const { countries } = action.payload;

      state.isFetching = false;
      state.countries = countries;
    },
    getCountriesError(state, action) {
      const { error } = action.payload;

      state.isFetching = false;
      state.error = error;
    },
    setValueInput(state, action) {
      const { value } = action.payload;

      state.inputValue = value;
    },
    setCheckedCountry(state, action) {
      const { name, valueChecked } = action.payload;

      if (valueChecked) {
        state.checkedCountries.push(name);
      } else {
        state.checkedCountries = state.checkedCountries.filter(
          (item) => item !== name
        );
      }
    },
    setRemovedCountry(state, action) {
      state.removedCountries.push(action.payload.name);
    },
  },
});

export const {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesError,
  setValueInput,
  setCheckedCountry,
  setRemovedCountry,
} = countriesSlice.actions;
export default countriesSlice.reducer;
