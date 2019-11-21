import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return (
    <nav>
      <h2 id="local" className="nav-option" onClick={event => props.changeNewsType(props.local, 'local')}>Local</h2>
      <h2 id="entertainment" className="nav-option" onClick={event => props.changeNewsType(props.entertainment, 'entertainment')}>Entertainment</h2>
      <h2 id="health" className="nav-option" onClick={event => props.changeNewsType(props.health, 'health')}>Health</h2>
      <h2 id="science" className="nav-option" onClick={event => props.changeNewsType(props.science, 'science')}>Science</h2>
      <h2 id="technology" className="nav-option" onClick={event => props.changeNewsType(props.technology, 'technology')}>Tech</h2>
    </nav>
  )
}

export default Menu;
