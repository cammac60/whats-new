import React from 'react';
import './NewsContainer.css'
import App from '../App/App.js';
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = props => {
  return (
    <aside className="news-container">
      <NewsArticle data={props}/>
    </aside>
  );
}


export default NewsContainer;
