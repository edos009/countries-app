import React from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import CONSTANTS from "../../constants";

import styles from "./Footer.module.scss";

const { THEMES } = CONSTANTS;

const Footer = () => {
  const themes = useSelector((state) => state.themes.themes);

  const stylesFooter = cx(
    styles.footer,
    {
      [styles.bg_light_theme]: themes === THEMES.LIGHT,
      [styles.bg_dark_theme]: themes === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: themes === THEMES.LIGHT,
      [styles.color_light_theme]: themes === THEMES.DARK,
    }
  );

  return (
    <footer className={stylesFooter}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <p className={styles.footer_text}>
            ediktuytyunnik@gmail.com | @2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
