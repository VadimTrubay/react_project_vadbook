import styles from "./Chat.module.css";
import React from "react";
import Friend from "./Friend/Friend";
// import My from "./My/My";



function Chat(props) {
  // const currentPost = props.currentPost;
  // const newPost = React.createRef();
  //
  // const renderPost = () => {
  //   const postMessage = newPost.current.value;
  //   if (postMessage){
  //     props.store.addPost();
  //   }
  // }
  //
  // const onPostChange = () => {
  //   const postMessage = newPost.current.value;
  //   props.store.updatePost(postMessage);
  // }
        //   <div className={styles.messages}>
        //   <img className={styles.photo} src={''} alt="photoMe"/>
        //   <Me store={props.store}/>
        // </div>
        // <div className={styles.input}>
        //   <textarea onChange={onPostChange} value={props.store.getPosts().newMessage} ref={newPost} cols="40" rows="2"/>
        //   <button onClick={renderPost}>Add post</button>
        // </div>

  return (<div className={styles.container}>
      <div className={styles.board}>
        <p>Chat</p>
        <div className={styles.messages}>
          <img className={styles.photo} src={props.store.getStateById(props.userId).photo} alt="photoUser"/>
          {props.store.getStateById(props.userId).name}: <Friend store={props.store} userId={props.userId} />
        </div>

      </div>
    </div>
  );

}

export default Chat;