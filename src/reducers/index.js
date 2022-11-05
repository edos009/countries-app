import { combineReducers } from "@reduxjs/toolkit";
import countriesReducer from "./countriesReducer";
import themesReducer from "./themesReducer"

const rootReducer = combineReducers({
  themes: themesReducer,
  countries: countriesReducer,
});

export default rootReducer;
