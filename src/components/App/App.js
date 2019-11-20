import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'

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
        <Menu changeNewsType={this.changeNewsType}
        local={local}
        entertainment={entertainment}
        health={health}
        science={science}
        technology={technology}
        />
        <NewsContainer data={this.state}/>
      </div>
    );
  }

  changeNewsType = (prop) => {
    this.setState({articles: prop});
  }
}

export default App;
