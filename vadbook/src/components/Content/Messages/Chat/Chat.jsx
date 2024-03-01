import styles from "./Chat.module.css";
import React from "react";
import {likes} from "./images/likes";
import {addPostActionCreator, updatePostActionCreator} from "../../../../Redux/redux";


function Chat(props) {
  let userState = props.store.getStateById(props.userId);
  let newPost = React.createRef();

  let addPost = () => {
    let newValue = newPost.current.value;
    // let newValue = e.target.value;
    if (newValue) {
      props.store.dispatch(addPostActionCreator(props.userId));
    }
  }

  let updatePost = (e) => {
    // let newValue = newPost.current.value;
    let newValue = e.target.value;
    props.store.dispatch(updatePostActionCreator(props.userId, newValue));
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <p>Chat</p>
        <div className={styles.messages}>
          {/*{userState.name}*/}
          {userState.posts.map(post => (
            <p key={post.id}><img className={styles.photo} src={post.photo} alt="photoUser"/>
              <span className={styles.name}>{post.name} </span>-- {post.message} -- { likes }:{post.likes}
            </p>
          ))
          }
        </div>
        <div className={styles.input}>
          <textarea
            value={props.store.getStateById(props.userId).newMessage}
            onChange={updatePost}
            ref={newPost}
            cols="40"
            rows="2"
          />
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;