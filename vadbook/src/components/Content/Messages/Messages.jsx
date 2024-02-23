import React from "react";
import s from "./Messages.module.css"
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";


function Messages(props) {
  return (
    <div className={s.messages}>
      <Contacts data={props.data}/>
      <Chat id={props.id}
            name={props.name}
            message={props.message}/>
    </div>
  );
}


export default Messages;