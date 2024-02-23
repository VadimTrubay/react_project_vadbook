import styles from "./Chat.module.css";
import React from "react";


function Chat(props) {
  return (<div className={styles.container}>
            <div className={styles.board}>
              <p>Chat</p>
              <div>
                {/*<p>id : {props.user.id}</p>*/}
                <p>name: {props.user.name}</p>
                <p>message: {props.user.message}</p>
              </div>
              <div className={styles.input}>
                <textarea name="" id="" cols="40" rows="2"></textarea>
                <button type="submit">send</button>
              </div>
            </div>
          </div>
  );

}

export default Chat;