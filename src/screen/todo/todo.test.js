import React from 'react';
import { shallow } from 'enzyme';

// Todo
import Todo from './Todo';

function setup() {
  const props = {};
  const wrapper = shallow(<Todo />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
