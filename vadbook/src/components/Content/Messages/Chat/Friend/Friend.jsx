import React from "react";
import styles from "./Friend.module.css"


function Friend(props) {
  return (
    <div className={styles.friend}>
        message: {props.store.getPostsByUserId(props.userId).map(post => post.message)}
      <p>likes: {props.store.getPostsByUserId(props.userId).map(post => post.likes)}</p>
    </div>
  )
}

export default Friend;