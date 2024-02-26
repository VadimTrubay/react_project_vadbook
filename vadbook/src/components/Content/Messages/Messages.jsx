import React from "react";
import s from "./Messages.module.css"
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";


function Messages(props) {
  return (
    <div className={s.messages}>
      <Contacts state={props.state} />
      <Chat user={props.user} addPost={props.addPost} />
    </div>
  );
}


export default Messages;