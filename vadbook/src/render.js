import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import {addPost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTrie = (props) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={props} addPost={addPost}/>

      </React.StrictMode>
    </BrowserRouter>
  );
}