import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import Logo from "../Logo";
import Navigation from "../Navigation";
import CONSTANTS from "../../constants";
import { setTheme } from "../../reducers/themesReducer";

import styles from "./Header.module.scss";

const { THEMES } = CONSTANTS;

const Header = () => {
  const themes = useSelector((state) => state.themes.themes);
  const dispatch = useDispatch();

  const stylesHeader = cx(
    styles.header,
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
    <header className={stylesHeader}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <Logo />
          <Navigation />
          <div
            className={styles.box_theme}
            onClick={() => dispatch(setTheme())}
          >
            {themes === THEMES.DARK ? (
              <DarkModeIcon className={styles.btn_theme} />
            ) : (
              <WbSunnyIcon className={styles.btn_theme} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
