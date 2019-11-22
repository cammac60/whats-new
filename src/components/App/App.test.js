import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import health from '../../data/health';

let wrapper;

describe('App', () => {

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with new articles when changeNewsType is called', () => {
    wrapper.instance().toggleSelectedNewsStyle = jest.fn();
    expect(wrapper.state('articles')).toEqual(local);
    wrapper.instance().changeNewsType(health, 'health');
    expect(wrapper.state('articles')).toEqual(health);
  });

  it('should update state when a search is entered', () => {
    document.body.innerHTML =
    '<input id="search-input" value="Chicken">' +
    '</input>';
    wrapper.instance().returnSearchResults();
    expect(wrapper.state('articles')).toEqual([local[1]]);
  });

  it.skip('should call the returnSearchResults method on click of the header button', () => {
    wrapper.instance().returnSearchResults = jest.fn();
    wrapper.find('.search-btn').simulate('click');
    expect(returnSearchResults).toHaveBeenCalled();
  });
  
});
