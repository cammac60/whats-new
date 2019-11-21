import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import health from '../../data/health';


describe('App', () => {

  it('should update state with new articles when changeNewsType is called', () => {
    const wrapper = shallow(<App />);
    const mockNews = health;
    wrapper.instance().toggleSelectedNewsStyle = jest.fn();
    expect(wrapper.state('articles')).toEqual(local);
    wrapper.instance().changeNewsType(mockNews, 'health');
    expect(wrapper.state('articles')).toEqual(health);
  });

});
