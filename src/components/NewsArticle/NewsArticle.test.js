import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle.js';
import local from '../../data/local'

const localData = {
  data: local
}

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle data={localData}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
