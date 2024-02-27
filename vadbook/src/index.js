import './index.css';
import reportWebVitals from './tests/reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals();
