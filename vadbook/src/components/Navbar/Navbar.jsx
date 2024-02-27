import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
// import Friends from "./Friends/Friends";

function Navbar(props) {
  const checkIsActive = ({isActive}) => isActive ? `${styles.active}` : ""
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.item}><NavLink to="/messages" className={checkIsActive}>Messages</NavLink></div>
        <div className={styles.item}><NavLink to="/music" className={checkIsActive}>Music</NavLink></div>
        <div className={styles.item}><NavLink to="/photo" className={checkIsActive}>Photo</NavLink></div>
        <div className={styles.item}><NavLink to="/profile" className={checkIsActive}>Profile</NavLink></div>
        <br/>
        <div className={styles.item}><NavLink to="/settings" className={checkIsActive}>Settings</NavLink></div>
      </nav>
      <div className={styles.friends}>
        {/*<Friends store={props.store} />*/}
      </div>
    </div>
  );
}

export default Navbar;
