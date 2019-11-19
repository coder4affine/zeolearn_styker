/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class App extends Component {
  i = 0;

  state = {
    user: 'yagnesh',
    error: false,
  };

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    console.log('getDerivedStateFromProps');
    return {
      ...state,
      gender: 'male',
    };
  }

  componentDidMount() {
    // console.log(this.h1);
    document.addEventListener('copy', this.copyText);

    this.sto = setTimeout(() => {
      console.log('hello');
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // const { user } = this.state;
    // if (user !== nextState.user) {
    //   return true;
    // }
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('getSnapshotBeforeUpdate this.state', this.state);
    console.log('getSnapshotBeforeUpdate prevState', prevState);
    return prevState;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate this.state', this.state);
    console.log('componentDidUpdate prevState', prevState);
    console.log('componentDidUpdate snapshot', snapshot);
  }

  componentWillUnmount() {
    document.removeEventListener('copy', this.copyText);
    clearInterval(this.sto);
  }

  copyText = () => {
    console.log('copied');
  };

  clickMe = () => {
    this.setState({ error: true });
    // this.setState({ user: `rohit${this.i}` });
    // this.i += 1;
  };

  render() {
    const { user, gender, error } = this.state;
    if (error) {
      throw new Error('Error');
    }
    console.log('render');
    return (
      <div>
        <h1
          ref={ref => {
            this.h1 = ref;
          }}
        >
          {`Hello ${user}`}
        </h1>
        <h2>{`Hello ${gender}`}</h2>
        <button type="button" onClick={this.clickMe}>
          Change User
        </button>
      </div>
    );
  }
}
