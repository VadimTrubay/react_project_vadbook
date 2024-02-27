import styles from './App.module.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Messages from "./Content/Messages/Messages";
import Music from "./Content/Music/Music";
import Photo from "./Content/Photo/Photo";
import Profile from "./Content/Profile/Profile";
import Settings from "./Content/Settings/Settings";
import Contacts from "./Content/Messages/Contacts/Contacts";
import {updatePost} from "../Redux/state";


function App(props) {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Header/>
        <Footer/>
        <Navbar friends={props.state}/>
        <Routes>

          <Route exact path="/messages" element={<Contacts state={props.state}/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/photo" element={<Photo/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
          {props.state.map((user) => (
            <Route
              key={user.id}
              path={`/chat/${user.id}`}
              element={<Messages
                updatePost={props.updatePost}
                state={props.state}
                user={user}
                addPost={props.addPost} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
