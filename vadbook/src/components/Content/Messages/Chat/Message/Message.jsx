import React from "react";
import styles from "./Message.module.css"
import {NavLink} from "react-router-dom";


function Message(props) {
  return (props.user.posts.map((post) => (
      <div className={styles.message}>
        <p>
          message: {post.message}
        </p>
        <p>likes: {post.likes}</p>
      </div>
  )))
}

export default Message;