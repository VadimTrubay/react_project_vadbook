import React from "react";
import s from "./Chat.module.css";


function Chat(props) {
  // console.log(props.data)
  return (<div className={s.container}>
            <div className={s.board}>
              <p>Chat</p>
              <div>
                {/*<p>id : {props.id}</p>*/}
                {/*<p>name: {props.data}</p>*/}
                {/*<p>message: {props.data}</p>*/}
              </div>
              <div className={s.input}>
                <textarea name="" id="" cols="40" rows="2"></textarea>
                <button type="submit">send</button>
              </div>
            </div>
          </div>
  );

}

export default Chat;