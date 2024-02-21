import React from "react";
import s from "./Contacts.module.css";
import {NavLink} from "react-router-dom";

function PrepareData(props) {
  const checkIsActive = ({isActive}) => isActive ? `${s.active}` : ""

  return (props.userData.map((user) => (
    <li key={user.id}>
      <NavLink to={`/dialogs/${user.id}`} className={checkIsActive(user)}>
        {user.name}
      </NavLink>
    </li>

  )))
}


function Contacts(props) {

  return (
    <nav className={s.contacts}>
      <span>Contacts</span>
      <ul className={s.item}>
        <PrepareData userData={props.userData} />
      </ul>
    </nav>
  );
}


export default Contacts;