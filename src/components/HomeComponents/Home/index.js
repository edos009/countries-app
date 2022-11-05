import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CONSTANTS from "../../../constants";

import styles from "./Home.module.scss";

const { THEMES } = CONSTANTS;

const Home = () => {
  const themes = useSelector((state) => state.themes.themes);
  const navigateCountry = useNavigate();

  const stylesHome = cx(
    styles.home,
    {
      [styles.bg_light_theme]: themes === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: themes === THEMES.LIGHT,
      [styles.color_light_theme]: themes === THEMES.DARK,
    }
  );

  const stylesCountriesBtnGo = cx(
    styles.home_btn_go,
    {
      [styles.color_dark_theme]: themes === THEMES.LIGHT,
      [styles.color_light_theme]: themes === THEMES.DARK,
    },
    {
      [styles.bg_light_theme]: themes === THEMES.LIGHT,
      [styles.bg_dark_theme]: themes === THEMES.DARK,
    }
  );

  return (
    <section className={stylesHome}>
      <div className={styles.container}>
        <div className={styles.home_inner}>
          <h1 className={styles.home_title}>
            This is our countries app
          </h1>
          <button
            className={stylesCountriesBtnGo}
            onClick={() => navigateCountry(`/countries`)}
          >
            Let's go
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
