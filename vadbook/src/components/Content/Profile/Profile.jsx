import React from "react";
import s from "./Profile.module.css"
import avatar from "./images/ava.png"


function Profile() {
    return (
      <div className={s.container}>
        Profile
        <div className={s.content}>
          <img className={s.image} src={avatar} alt="avatar"/>
        </div>
      </div>
    );
}


export default Profile;