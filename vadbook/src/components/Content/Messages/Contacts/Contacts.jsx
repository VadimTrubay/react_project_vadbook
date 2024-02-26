import React from "react";
import styles from "./Contacts.module.css";
import {NavLink} from "react-router-dom";

function PrepareData(props) {
  const checkIsActive = ({isActive}) => isActive ? `${styles.active}` : ""

  return (props.state.map((contact) => (
    <div className={styles.item}><NavLink to={`/chat/${contact.id}`} className={checkIsActive}>{contact.name}</NavLink></div>

  // <li className={styles.item} key={contact.id}>
  //   <NavLink to={`/chat/${contact.id}`} className={checkIsActive(contact)}>
  //       {contact.name}
  //     </NavLink>
  //   </li>

  )))
}


function Contacts(props) {
  return (
    <div className={styles.contacts}>
      <nav className={styles.nav}>
        <span>Contacts</span>
        <ul className={styles.item}>
          <PrepareData state={props.state}/>
        </ul>
      </nav>
    </div>
  );
}


export default Contacts;