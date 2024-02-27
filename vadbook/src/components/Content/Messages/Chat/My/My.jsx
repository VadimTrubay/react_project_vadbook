import React from "react";
import styles from "./My.module.css"


function My(props) {
  return (
    <div className={styles.my}>
      <p>
        message:
      </p>
      <p>likes: </p>
    </div>
  )
}

export default My;