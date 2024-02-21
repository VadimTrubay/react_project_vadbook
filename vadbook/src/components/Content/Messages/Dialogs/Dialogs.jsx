import React from "react";
import styles from "./Dialogs.module.css"
import Chat from "./Chat/Chat";


function Dialogs(props) {
  // console.log(props)
  return (
    <div className={styles.dialogs}>
      <Chat userData={props.userData} id={props.id} />
    </div>
  );
}


export default Dialogs;