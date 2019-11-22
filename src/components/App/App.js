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
      articles: local,
      category: local
    }
  }

  render () {
    console.log(this.state);
    return (
      <div className="app">
        <SearchForm
          searchFn={this.returnSearchResults}
          resetError={this.resetInputError}
          enterKeyListener={this.enterKeyListener}
        />
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
    let selected = document.getElementById(id);
    Array.from(options).forEach(option => {
      option.style.backgroundColor = '#141527';
      option.style.boxShadow = 'none';
    });
    selected.style.backgroundColor = '#DD5454';
    selected.style.boxShadow = '-7px -7px 3px #3A3C4F';
  }

  changeNewsType = (prop, id) => {
    this.setState({
      articles: prop,
      category: prop
    });
    this.toggleSelectedNewsStyle(id);
  }

  returnSearchResults = () => {
    let userQuery = document.getElementById('search-input');
    let results = this.state.category.filter(story => {
      if (story.headline.search(userQuery.value) !== -1 || story.description.search(userQuery.value) !== -1) {
        return story;
      }
    });
    if (results.length > 0 && userQuery.value) {
      let curCategory = this.state.category;
      this.setState({
        articles: results,
        category: curCategory
      });
      userQuery.value = '';
    } else {
      userQuery.style.border = '1px solid red';
      document.getElementById('search-error').style.display = 'block';
    }
  }

  resetInputError = () => {
    document.getElementById('search-input').style.border = '1px solid white';
    document.getElementById('search-error').style.display = 'none';
  }

  enterKeyListener = event => {
    if (event.key === 'Enter') {
      this.returnSearchResults();
    }
  }

  fetchData = newsType => {
    return fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then(json => json[newsType])
    .catch(error => console.log(error))
  }

}

export default App;
