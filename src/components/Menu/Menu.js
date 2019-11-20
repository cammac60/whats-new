import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return (
    <nav>
      <h2 className="nav-option" onClick={event => props.changeNewsType(props.local)}>Local</h2>
      <h2 className="nav-option" onClick={event => props.changeNewsType(props.entertainment)}>Entertainment</h2>
      <h2 className="nav-option" onClick={event => props.changeNewsType(props.health)}>Health</h2>
      <h2 className="nav-option" onClick={event => props.changeNewsType(props.science)}>Science</h2>
      <h2 className="nav-option" onClick={event => props.changeNewsType(props.technology)}>Tech</h2>
    </nav>
  )
}

export default Menu;
