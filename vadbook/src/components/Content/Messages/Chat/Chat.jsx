import styles from "./Chat.module.css";
import React from "react";
import Message from "./Message/Message";



function Chat(props) {

  const newPost = React.createRef();

  const renderPost = () => {
    const postMessage = newPost.current.value;
    if (postMessage){
      props.addPost(props.user.id);
    }
  }

  const onPostChange = () => {
    const postMessage = newPost.current.value;
    props.updatePost(postMessage, props.user.id);
  }

  return (<div className={styles.container}>
            <div className={styles.board}>
              <p>Chat</p>
              <div className={styles.messages}>
                <img className={styles.photo} src={props.user.photo} alt="photoUser"/>
                {props.user.name}: <Message user={props.user} />
              </div>
              <div className={styles.input}>
                <textarea onChange={onPostChange} value={props.user.newMessage} ref={newPost} cols="40" rows="2" />
                <button onClick={ renderPost }>Add post</button>
              </div>
            </div>
          </div>
  );

}

export default Chat;