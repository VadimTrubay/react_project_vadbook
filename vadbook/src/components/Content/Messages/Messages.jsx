import React from "react";
import s from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Contacts from "./Contacts/Contacts";


function Messages(props) {

  return (
    <div className={s.messages}>
        <Contacts userData={props.userData} />
        <Dialogs userData={props.userData} />
    </div>
  );
}


export default Messages;