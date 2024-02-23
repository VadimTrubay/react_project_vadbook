import React from "react";
import styles from "./Profile.module.css"
import avatar from "./images/ava.png"


function Profile() {
    return (
      <div className={styles.profile}>
        Profile
        <div>
          <img className={styles.image} src={avatar} alt="avatar"/>
        </div>
      </div>
    );
}


export default Profile;