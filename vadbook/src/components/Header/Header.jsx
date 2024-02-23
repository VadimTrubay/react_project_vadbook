import React from "react";
import styles from "./Header.module.css"
import logo from "./images/logo.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/messages"><img src={logo} alt="Main header"/></Link>
    </div>
  );
}


export default Header;
