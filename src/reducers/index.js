import { combineReducers } from "@reduxjs/toolkit";
import themesReducer from "./themesReducer"

const rootReducer = combineReducers({
  themes: themesReducer,
});

export default rootReducer;
