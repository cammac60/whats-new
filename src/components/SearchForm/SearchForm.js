import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
  return (
    <header>
      <h1>Whats<span>New</span></h1>
      <div id="input-wrap">
        <input onKeyPress={() => props.enterKeyListener(event)} onChange={props.resetError} id="search-input" type="text" placeholder="Search for a story..."></input>
        <label id="search-error" name="search-error">No results. Please try again.</label>
      </div>
      <button onClick={props.searchFn}  className="search-btn" type="button">Search</button>
    </header>
  )
}

export default SearchForm;
