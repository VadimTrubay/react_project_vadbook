import './index.css';
import reportWebVitals from './tests/reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./components/App";
import store from "./Redux/redux";

let root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderPage = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderPage(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderPage(state);
})

reportWebVitals();
