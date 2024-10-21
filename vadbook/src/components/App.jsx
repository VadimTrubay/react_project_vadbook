import styles from './App.module.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Music from "./Content/Music/Music";
import Photo from "./Content/Photo/Photo";
import Profile from "./Content/Profile/Profile";
import Settings from "./Content/Settings/Settings";
import Contacts from "./Content/Messages/Contacts/Contacts";
import Messages from "./Content/Messages/Messages";
import {ToastContainer} from "react-toastify";


function App(props) {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition: Bounce,
        />
        {/* Same as */}
        <ToastContainer/>
        <Header/>
        <Footer/>
        <Navbar store={props.store}/>
        <Routes>

          <Route exact path="/messages" element={<Contacts store={props.store}/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/photo" element={<Photo/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
          {props.store.getState().map((user) => (
            <Route
              key={user.id}
              path={`/chat/${user.id}`}
              element={<Messages store={props.store} userId={user.id}/>}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
