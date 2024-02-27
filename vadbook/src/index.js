import './index.css';
import reportWebVitals from './tests/reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import {addPost, subscribe, updatePost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import state from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTrie = (props) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={props} addPost={addPost} updatePost={updatePost}/>

      </React.StrictMode>
    </BrowserRouter>
  );
}

reportWebVitals();

rerenderEntireTrie(state);
subscribe(rerenderEntireTrie);