import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import List from '../../components/list/List';
import Footer from '../../components/footer/Footer';

// Todo
import Todo from './Todo';

function setup() {
  const props = {};
  const wrapper = shallow(<Todo />);
  return { wrapper, props };
}

describe('Snapshot of Todo Component', () => {
  it('Snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});

describe('Check Header ', () => {
  it('Check header exist of not', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('check title Exist in header component', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Header).props()).toEqual({ title: 'Todo App' });
  });
});

describe('Check Form ', () => {
  it('Check Form exist of not', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Form).exists()).toBe(true);
  });

  it('Check Form exist of not', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Form).props().onAddTodo).toEqual(expect.any(Function));
  });
});

it('Check List exist of not', () => {
  const { wrapper } = setup();
  expect(wrapper.find(List).exists()).toBe(true);
});

it('Check Footer exist of not', () => {
  const { wrapper } = setup();
  expect(wrapper.find(Footer).exists()).toBe(true);
});
