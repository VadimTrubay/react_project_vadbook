import React from "react";
import styles from "./Contacts.module.css";
import {NavLink} from "react-router-dom";

function PrepareData(props) {
  const checkIsActive = ({isActive}) => isActive ? `${styles.active}` : ""

  return (props.contacts.map((contact) => (
    <li key={contact.id}>
      <NavLink to={`/chat/${contact.id}`} className={checkIsActive(contact)}>
        {contact.name}
      </NavLink>
    </li>

  )))
}


function Contacts(props) {
  return (
    <div className={styles.contacts}>
      <nav className={styles.nav}>
        <span>Contacts</span>
        <ul className={styles.item}>
          <PrepareData contacts={props.contacts}/>
        </ul>
      </nav>
    </div>
  );
}


export default Contacts;