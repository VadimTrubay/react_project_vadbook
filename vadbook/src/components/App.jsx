import s from './App.module.css';
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
import userData from "../Database/Database";
import Dialogs from "./Content/Messages/Dialogs/Dialogs";


function App() {
  return (
    <div className={s.app}>
      <BrowserRouter>
        <Header />
        <Footer />
        <Navbar />
        <Routes>
          <Route exect path="/messages" element={<Messages userData={userData} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path={`/dialogs/1`} element={<Dialogs userData={userData[0]} id="1"/>} />
          <Route path={`/dialogs/2`} element={<Dialogs userData={userData[1]} id="2"/>} />
          <Route path={`/dialogs/3`} element={<Dialogs userData={userData[2]} id="3"/>} />
          <Route path={`/dialogs/4`} element={<Dialogs userData={userData[3]} id="4"/>} />
          <Route path={`/dialogs/5`} element={<Dialogs userData={userData[4]} id="5"/>} />

          {/*{userData.map((userId) => (*/}
          {/*  <Route path={`/dialogs/${userId}`} element={<Messages userData={userData} id={userId}/>} />*/}
          {/*))}*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
