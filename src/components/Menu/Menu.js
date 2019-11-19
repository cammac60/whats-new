import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav>
      <h2 className="nav-option" id="local">Local</h2>
      <h2 className="nav-option" id="entertainment">Entertainment</h2>
      <h2 className="nav-option" id="health">Health</h2>
      <h2 className="nav-option" id="science">Science</h2>
      <h2 className="nav-option" id="tech">Tech</h2>
    </nav>
  )
}

export default Menu;
