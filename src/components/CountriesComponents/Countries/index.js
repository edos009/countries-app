import React, { useCallback, useEffect } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Country from "../Country";
import CONSTANTS from "../../../constants";
import Spinner from "../../Spinner";

import styles from "./Countries.module.scss";
import {
  getCountriesRequest,
  setValueInput,
} from "../../../reducers/countriesReducer";

const { THEMES } = CONSTANTS;

const Countries = () => {
  const {
    themes: { themes },
    countries: {
      countries,
      error,
      isFetching,
      inputValue,
      checkedCountries,
      removedCountries,
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const commonStylesColorTheme = {
    [styles.color_dark_theme]: themes === THEMES.LIGHT,
    [styles.color_light_theme]: themes === THEMES.DARK,
  };
  const commonStylesBgTheme = {
    [styles.bg_light_theme]: themes === THEMES.LIGHT,
    [styles.bg_dark_theme]: themes === THEMES.DARK,
  };
  const stylesCountries = cx(
    styles.countries,
    {
      [styles.bg_light_theme]: themes === THEMES.DARK,
    },
    commonStylesColorTheme
  );
  const stylesCountriesInput = cx(
    styles.countries_input,
    commonStylesBgTheme,
    commonStylesColorTheme
  );
  const stylesCountriesBtnReset = cx(
    styles.countries_btn_reset,
    commonStylesBgTheme,
    commonStylesColorTheme
  );

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountriesRequest());
    }
    // eslint-disable-next-line
  }, []);

  const renderCountries = useCallback(
    () =>
      countries
        .filter(
          (country) =>
            checkedCountries.includes(country.name) &&
            !removedCountries.includes(country.name)
        )
        .concat(
          countries.filter(
            (country) =>
              country.name.toLowerCase().includes(inputValue.toLowerCase()) &&
              !checkedCountries.includes(country.name) &&
              !removedCountries.includes(country.name)
          )
        )
        .map((country) => <Country country={country} key={country.name} />),
    [checkedCountries, countries, inputValue, removedCountries]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={stylesCountries}>
      <div className={styles.container}>
        <div className={styles.countries_inner}>
          <h1 className={styles.countries_title}>Countries</h1>
          <div className={styles.countries_search_box}>
            <input
              className={stylesCountriesInput}
              type="text"
              value={inputValue}
              onChange={({ target: { value } }) =>
                dispatch(setValueInput({ value }))
              }
              placeholder="Search..."
            />
            <button
              className={stylesCountriesBtnReset}
              onClick={() => dispatch(setValueInput({ value: "" }))}
            >
              Reset
            </button>
          </div>
          {isFetching ? (
            <Spinner />
          ) : error ? (
            <div>Error</div>
          ) : (
            <div className={styles.countries_list}>{renderCountries()}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Countries;
