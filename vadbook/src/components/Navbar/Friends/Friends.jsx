import React from "react";
import styles from "./Friends.module.css";
import {NavLink} from "react-router-dom";


const quantityFriends = 2;

function PrepareData(props) {
  const nawFriends = [];
  const checkIsActive = ({isActive}) => (isActive ? `${styles.active}` : '');

  while (nawFriends.length < quantityFriends) {
    const randomContact = props.friends[Math.floor(Math.random() * props.friends.length)];

    if (!nawFriends.some(contact => contact.id === randomContact.id)) {
      nawFriends.push(randomContact);
    }
  }

  return (
    <ul>
      {nawFriends.map((contact, index) => (
        <li className={styles.item} key={index}>
            <img className={styles.photo} src={contact.photo} alt="photo"/>
          <NavLink to={`/chat/${contact.id}`} className={checkIsActive(contact)}>
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
          <PrepareData friends={props.friends}/>
        </ul>
      </nav>
    </div>
  );
}


export default Friends;