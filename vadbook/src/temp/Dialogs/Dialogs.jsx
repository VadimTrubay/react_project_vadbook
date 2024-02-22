import React from "react";
import styles from "./Dialogs.module.css"
import Chat from "./Chat/Chat";


function Dialogs(props) {
  // console.log(props)
  return (
    <div className={styles.dialogs}>
      <Chat />
    </div>
  );
}


export default Dialogs;