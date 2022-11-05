import { combineReducers } from "@reduxjs/toolkit";

import themesReducer from "./themesReducer";
import countriesReducer from "./countriesReducer";
import countryInfoReducer from "./countryInfoReducer";

const rootReducer = combineReducers({
  themes: themesReducer,
  countries: countriesReducer,
  countryInfo: countryInfoReducer,
});

export default rootReducer;
