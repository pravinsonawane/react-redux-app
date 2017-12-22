import expect from 'expect';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ComponentForTest from './componentForTest';

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    user: {
        fName: 'Pravin',
        lName: 'Sonawane',
        age: '34'
    }
  };

  return shallow(<ComponentForTest {...props} />);
}

describe('Testing component using Enzyme', () => {

  it('renders div and h2', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('Pravin');

  });
});
