import React, { Component } from 'react';
import Child from './Child';
import Child1 from './Child1';

export default class Test extends Component {
  state = {
    user: {
      name: 'yagnesh',
    },
    render: 'render',
  };

  changeUser = () => {
    const { user } = this.state;
    // user.name = 'rohit';
    this.setState({ user: { ...user, name: 'rohit' } });
  };

  render() {
    console.log('Test');
    const { user, render } = this.state;
    return (
      <div>
        <div>{user.name}</div>
        <div>{render}</div>
        <button type="button" onClick={this.changeUser}>
          Change User
        </button>

        <button type="button" onClick={() => this.setState({ render: 'updated render' })}>
          Change Render
        </button>
        <div>
          <Child user={user} />
        </div>
        <div>
          <Child1 user={user} />
        </div>
      </div>
    );
  }
}
