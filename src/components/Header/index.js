import React, { useState, useEffect } from "react";
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
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActiveMenu) {
      document.querySelector("body").classList.add("lock");
    } else {
      document.querySelector("body").classList.remove("lock");
    }
  }, [isActiveMenu]);

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

  const stylesBurger = cx(styles.header_burger, {
    [styles.header_burger_active]: isActiveMenu,
  });

  return (
    <header className={stylesHeader}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <Logo setIsActiveMenu={setIsActiveMenu} />
          <Navigation
            isActiveMenu={isActiveMenu}
            setIsActiveMenu={setIsActiveMenu}
          />
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
          <div
            className={stylesBurger}
            onClick={() => setIsActiveMenu(!isActiveMenu)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
