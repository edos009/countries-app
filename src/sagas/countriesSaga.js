import { put } from "redux-saga/effects";

import * as API from "../api";
import {
  getCountriesError,
  getCountriesSuccess,
} from "../reducers/countriesReducer";
import {
  getCountryError,
  getCountrySuccess,
} from "../reducers/countryInfoReducer";

export function* getCountriesSaga(action) {
  try {
    const { data } = yield API.getCountries();
    yield put(getCountriesSuccess({ countries: data }));
  } catch (error) {
    yield put(getCountriesError({ error }));
  }
}

export function* getCountrySaga(action) {
  try {
    const { data } = yield API.getCountry(action.payload.countryId);
    yield put(getCountrySuccess({ country: data[0] }));
  } catch (error) {
    yield put(getCountryError({ error }));
  }
}
