import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import health from '../../data/health';


describe('App', () => {

  it('should update state with new articles when changeNewsType is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().toggleSelectedNewsStyle = jest.fn();
    expect(wrapper.state('articles')).toEqual(local);
    wrapper.instance().changeNewsType(health, 'health');
    expect(wrapper.state('articles')).toEqual(health);
  });

  it('should update state when a search is entered', () => {
    const wrapper = shallow(<App />);
    document.body.innerHTML =
    '<input id="search-input" value="Chicken">' +
    '</input>';
    wrapper.instance().returnSearchResults();
    expect(wrapper.state('articles')).toEqual([local[1]]);
  })
});
