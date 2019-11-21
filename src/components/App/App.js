import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm searchFn={this.returnSearchResults}/>
        <main>
          <Menu changeNewsType={this.changeNewsType}
          local={local}
          entertainment={entertainment}
          health={health}
          science={science}
          technology={technology}
          />
          <NewsContainer data={this.state.articles} />
        </main>
      </div>
    );
  }

  toggleSelectedNewsStyle = (id) => {
    let options = document.getElementsByClassName('nav-option');
    Array.from(options).forEach(option => {
      option.style.backgroundColor = '#141527';
    });
    document.getElementById(id).style.backgroundColor = '#DD5454';
  }

  changeNewsType = (prop, id) => {
    this.setState({articles: prop});
    this.toggleSelectedNewsStyle(id);
  }

  returnSearchResults = () => {
    let userQuery = document.getElementById('search-input').value;
    let results = this.state.articles.filter(story => {
        if (story.headline.search(userQuery) !== -1 || story.description.search(userQuery) !== -1) {
          return story;
        }
      });
    if (results.length > 0) {
      this.setState({articles: results});
    }
  }

}

export default App;
