import { takeLatest } from "redux-saga/effects";

import { getCountriesRequest } from "../reducers/countriesReducer";
import { getCountriesSaga } from "./countriesSaga";

function* rootSaga() {
  yield takeLatest(getCountriesRequest.type, getCountriesSaga);
}

export default rootSaga;
