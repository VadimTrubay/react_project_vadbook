import React from 'react';
import "./Menu.css"

function Menu() {
  return (
    <div className="menu">
      <ul className="menu-item">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Message</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <br/>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
}


export default Menu;
