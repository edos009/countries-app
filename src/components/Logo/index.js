import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

const Logo = ({ setIsActiveMenu }) => {
  return (
    <Link className={styles.logo} to="/" onClick={() => setIsActiveMenu(false)}>
      Logo
    </Link>
  );
};

export default Logo;
