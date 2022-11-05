import { put } from "redux-saga/effects";

import * as API from "../api";
import {
  getCountriesError,
  getCountriesSuccess,
} from "../reducers/countriesReducer";

export function* getCountriesSaga(action) {
  try {
    const { data } = yield API.getCountries();
    yield put(getCountriesSuccess({ countries: data }));
  } catch (error) {
    yield put(getCountriesError({ error }));
  }
}
