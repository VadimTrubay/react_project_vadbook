import React from "react";
import s from "./Contacts.module.css";
import {NavLink} from "react-router-dom";

function PrepareData(props) {
  const checkIsActive = ({isActive}) => isActive ? `${s.active}` : ""

  return (props.data.map((user) => (
    <li key={user.id}>
      <NavLink to={`/chat/${user.id}`} className={checkIsActive(user)}>
        {user.name}
      </NavLink>
    </li>

  )))
}


function Contacts(props) {
  return (
    <div className={s.contacts}>
      <nav className={s.nav}>
        <span>Contacts</span>
        <ul className={s.item}>
          <PrepareData data={props.data}/>
        </ul>
      </nav>
    </div>
  );
}


export default Contacts;