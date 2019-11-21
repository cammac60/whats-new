import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <header>
      <h1>Whats<span>New</span></h1>
      <input type="text" placeholder="Search for a story..."></input>
      <button className="search-btn" type="button">Search</button>
    </header>
  )
}

export default SearchForm;
