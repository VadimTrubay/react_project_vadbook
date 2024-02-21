import React from "react";
import s from "./Chat.module.css";


function Chat(props) {
  console.log(props)
  return (<div className={s.container}>
            <div className={s.board}>
              <p>Message</p>
              <div>
                {/*<p>id : {props.id}</p>*/}
                <p>name: {props.userData.name}</p>
                <p>message: {props.userData.message}</p>
              </div>
              <div className={s.input}>
                <textarea name="" id="" cols="40" rows="2"></textarea>
                <button type="submit">send</button>
              </div>
            </div>
          </div>
  );


// function PrepareData(props) {
// return (props.userData.map((user) => (
//   if (user.id === props.user){
//     return (
//       <ul>
//         <li>message: {user.message}</li>
//       </ul>
//     ))
//   )
}
//   <div key={user.id} className={s.chat}>
//     <div className={s.chat__header}>
//       <NavLink to={`/messages/${user.id}`}>
//         {user.name}
//       </NavLink>
//     </div>
//     <div className={s.chat__body}>
//       {user.messages.map((message) => (
//         <div key={message.id} className={s.chat__message}>
//           {message.text}
//         </div>
//       ))}
//     </div>
//   </div>
// )
// }
export default Chat;