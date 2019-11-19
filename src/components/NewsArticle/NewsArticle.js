import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  return props.data.data.articles.map(story => {
    return (
      <article className="article-wrap">
        <img src={story.img} className="article-img"/>
        <h3>{story.headline}</h3>
        <p>{story.description}</p>
      </article>
    )
  });
}

export default NewsArticle;
