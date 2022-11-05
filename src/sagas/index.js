import { takeLatest } from "redux-saga/effects";

import {
  getCountriesRequest,
} from "../reducers/countriesReducer";
import { getCountryRequest } from "../reducers/countryInfoReducer";
import { getCountriesSaga, getCountrySaga } from "./countriesSaga";

function* rootSaga() {
  yield takeLatest(getCountriesRequest.type, getCountriesSaga);
  yield takeLatest(getCountryRequest.type, getCountrySaga);
}

export default rootSaga;
