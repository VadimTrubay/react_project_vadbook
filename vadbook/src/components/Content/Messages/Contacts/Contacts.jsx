import React from "react";
import styles from "./Contacts.module.css";
import {NavLink} from "react-router-dom";

function PrepareData(props) {
  const checkIsActive = ({isActive}) => isActive ? `${styles.active}` : ""
  const getPosts = props.store.getState();
  return (getPosts.map((user) => (
    <div
      className={styles.item}><NavLink to={`/chat/${user.id}`}
      className={checkIsActive}>{user.name}</NavLink>
    </div>
  )))
}


function Contacts(props) {
  return (
    <div className={styles.contacts}>
      <nav className={styles.nav}>
        <span>Contacts</span>
        <ul className={styles.item}>
          <PrepareData store={props.store} />
        </ul>
      </nav>
    </div>
  );
}


export default Contacts;