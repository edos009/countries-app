import React from "react";
import cx from "classnames";

import CONSTANTS from "../../constants";
import NavigationItem from "../NavigationItem";

import styles from "./Navigation.module.scss";

const { NAVIGATION } = CONSTANTS;

const Navigation = ({ isActiveMenu, setIsActiveMenu }) => {

  const stylesNav = cx(
    styles.nav,
    {
      [styles.nav_active]: isActiveMenu,
    }
  );

  return (
    <nav className={stylesNav}>
      <ul className={styles.nav_list}>
        {NAVIGATION.LINKS.map((item) => (
          <NavigationItem
            item={item}
            key={item.id}
            setIsActiveMenu={setIsActiveMenu}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
