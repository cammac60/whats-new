import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
  return (
    <header>
      <h1>Whats<span>New</span></h1>
      <input id="search-input" type="text" placeholder="Search for a story..."></input>
      <button onClick={props.searchFn} className="search-btn" type="button">Search</button>
      // ^^ May need to change to add a callback
    </header>
  )
}

export default SearchForm;
