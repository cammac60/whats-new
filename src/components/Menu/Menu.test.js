import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Menu from './Menu.js'
import local from '../../data/local'

describe('Menu', () => {
  it('should invoke the changeNewsType fn with the correct argument', () => {
    const changeNewsTypeMock = jest.fn();
    const wrapper = shallow(<Menu
      changeNewsType={changeNewsTypeMock}
      local={local}
      />
    );
    wrapper.find('#local').simulate('click');
    expect(changeNewsTypeMock).toHaveBeenCalledWith(local, 'local');
  });
});
