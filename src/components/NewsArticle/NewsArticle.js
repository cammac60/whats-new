import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  return props.data.data.articles.map(story => {
    return (
      <article className="article-wrap">
        <img src={story.img} className="article-img"/>
        <h3 className="article-head">{story.headline}</h3>
        <p className="article-body">{story.description}</p>
        <button type="button" className="article-link">View Article >>></button>
      </article>
    )
  });
}

export default NewsArticle;
