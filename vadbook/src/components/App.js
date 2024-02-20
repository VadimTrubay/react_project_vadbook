import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from "./Menu/Menu";
import Content from "./Content/Content";

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Menu/>
      <Content/>
    </div>
  );
}


export default App;
