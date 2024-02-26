import styles from "./Chat.module.css";
import React from "react";
import Message from "./Message/Message";



function Chat(props) {
  const newPost = React.createRef();
  function addPost() {
    const postMessage = newPost.current.value;
    if (postMessage){
      props.addPost(postMessage, props.user.id);
      newPost.current.value = "";
    }
  }

  return (<div className={styles.container}>
            <div className={styles.board}>
              <p>Chat</p>
              <div className={styles.messages}>
                <img className={styles.photo} src={props.user.photo} alt="photoUser"/>
                {props.user.name}: <Message user={props.user} />
              </div>
              <div className={styles.input}>
                <textarea ref={newPost} cols="40" rows="2"></textarea>
                <button onClick={ addPost }>Add post</button>
              </div>
            </div>
          </div>
  );

}

export default Chat;