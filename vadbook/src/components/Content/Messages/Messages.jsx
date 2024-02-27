import React from "react";
import styles from "./Messages.module.css"
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";


function Messages(props) {
  return (
    <div className={styles.messages}>
      <Contacts store={props.store} />
      <Chat store={props.store} userId={props.userId}/>
    </div>
  );
}


export default Messages;