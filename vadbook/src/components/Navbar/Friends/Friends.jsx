import React from "react";
import styles from "./Friends.module.css";
import {NavLink} from "react-router-dom";


const quantityFriends = 3;

function PrepareData(props) {
  const getState = props.store.getState();
  const nawFriends = [];
  const checkIsActive = ({isActive}) => (isActive ? `${styles.active}` : '');

  while (nawFriends.length < quantityFriends) {
    const randomContact = getState[Math.floor(Math.random() * getState.length)];

    if (!nawFriends.some(contact => contact === randomContact)) {
      nawFriends.push(randomContact);
    }
  }

  return (
    <ul>
      {nawFriends.map((contact, index) => (
        <li className={styles.item} key={index}>
            <img className={styles.photo} src={contact.photo} alt="photoFriend"/>
          <NavLink to={`/chat/${contact}`} className={checkIsActive(contact)}>
            {contact.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}


function Friends(props) {
  return (
    <div className={styles.friends}>
      <span>Friends</span>
      <nav>
        <ul>
          <PrepareData store={props.store}/>
        </ul>
      </nav>
    </div>
  );
}


export default Friends;