import styles from './App.module.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Messages from "./Content/Messages/Messages";
import Music from "./Content/Music/Music";
import Photo from "./Content/Photo/Photo";
import Profile from "./Content/Profile/Profile";
import Settings from "./Content/Settings/Settings";
import Contacts from "./Content/Messages/Contacts/Contacts";


function App(props) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header/>
        <Footer/>
        <Navbar/>
        <Routes>

          <Route exact path="/messages" element={<Contacts contacts={props.contacts} />}/>
          <Route path="/music" element={<Music />}/>
          <Route path="/photo" element={<Photo />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/settings" element={<Settings />}/>
          {props.contacts.map((user) => (
            <Route
              key={user.id}
              path={`/chat/${user.id}`}
              element={<Messages contacts={props.contacts} user={user} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
