import styles from "./Chat.module.css";
import React from "react";

function Chat(props) {
  const newPost = React.createRef();
  // const userState = props.store.getStateById(props.userId);

  const renderPost = () => {
    const postMessage = newPost.current.value;
    // if (postMessage.trim()) {
      props.store.addPost(props.userId);
    // }
  }

  const onPostChange = () => {
    const postMessage = newPost.current.value;
    props.store.updatePost(postMessage, props.userId);
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <p>Chat</p>
        <div className={styles.messages}>
          {/*<img className={styles.photo} src={userState.photo} alt="photoUser"/>*/}
          {/*{userState.name}*/}
          {props.store.getStateById(props.userId).posts.map(post => (
            <p key={post.id}>name: {post.name}<br/>message: {post.message}<br/>likes: {post.likes}</p>
          ))}
        </div>
        <div className={styles.input}>
          <textarea
            value={props.store.getStateById(props.userId).newMessage}
            onChange={onPostChange}
            ref={newPost}
            cols="40"
            rows="2"
          />
          <button onClick={renderPost}>Add post</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;