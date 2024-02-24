import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

function Navbar(props) {
  const checkIsActive = ({isActive}) => isActive ? `${s.active}` : ""
  return (
    <div className="container">
      <nav className={s.nav}>
        <div className={s.item}><NavLink to="/messages" className={checkIsActive}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/music" className={checkIsActive}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/photo" className={checkIsActive}>Photo</NavLink></div>
        <div className={s.item}><NavLink to="/profile" className={checkIsActive}>Profile</NavLink></div>
        <br/>
        <div className={s.item}><NavLink to="/settings" className={checkIsActive}>Settings</NavLink></div>
      </nav>
      <div className="friends">
        <Friends friends={props.friends} />
      </div>
    </div>
  )
    ;
}

export default Navbar;
