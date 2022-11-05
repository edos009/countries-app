import React from "react";
import cx from "classnames";

import CONSTANTS from "../../../constants";

import styles from "./Home.module.scss";
import { useSelector } from "react-redux";

const { THEMES } = CONSTANTS;

const Home = () => {
  const themes = useSelector((state) => state.themes.themes);

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

  return (
    <section className={stylesHome}>
      <div className={styles.container}>
        <div className={styles.home_inner}>
          <h1 className={styles.home_title}>
            This is our countries application
          </h1>
          <button className={styles.home_btn_go}>Let's go</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
