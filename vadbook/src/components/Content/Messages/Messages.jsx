import React from "react";
import s from "./Messages.module.css"
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";


function Messages(props) {
  return (
    <div className={s.messages}>
      <Contacts contacts={props.contacts} />
      <Chat user={props.user} />
    </div>
  );
}


export default Messages;