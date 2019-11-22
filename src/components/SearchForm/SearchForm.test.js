import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

let wrapper;

describe('Search Form', () => {

  beforeEach(() => {
    let mockFn = jest.fn();
    wrapper = shallow(<SearchForm
      resetError={mockFn}
      searchFn={mockFn}
      enterKeyListener={mockFn}
      />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should invoke the search function on click of the button', () => {
    wrapper.find('.search-btn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

});
