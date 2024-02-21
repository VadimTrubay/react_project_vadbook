import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
  const checkIsActive = ({ isActive }) => isActive ? `${s.active}` : ""
  return (
    <nav className={s.nav}>
        <div className={s.item}><NavLink to="/messages" className={checkIsActive}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/music" className={checkIsActive}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/photo" className={checkIsActive}>Photo</NavLink></div>
        <div className={s.item}><NavLink to="/profile" className={checkIsActive}>Profile</NavLink></div>
        <br />
        <div className={s.item}><NavLink to="/settings" className={checkIsActive}>Settings</NavLink></div>
    </nav>
  );
}

export default Navbar;
