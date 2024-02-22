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
import Contacts from "./Content/Messages/Contacts/Contacts";


function App() {
  return (
    <div className={s.app}>
      <BrowserRouter>
        <Header />
        <Footer />
        <Navbar />
        <Routes>

          <Route exact path="/messages" element={<Contacts data={userData} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact/1" element={<Messages />} />
          {/*{userData.map((user) => (*/}
          {/*  <Route*/}
          {/*    key={user}*/}
          {/*    path={`/contact/${user}`}*/}
          {/*    element={<Messages id={user.id} name={user.name} age={user.age} message={user.message}/>}*/}
          {/*  />*/}
          {/*))}*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
