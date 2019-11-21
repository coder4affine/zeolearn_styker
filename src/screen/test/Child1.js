/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

export default class Child1 extends PureComponent {
  state = {};

  render() {
    console.log('Child1');
    const { user } = this.props;
    return <div>{user.name}</div>;
  }
}
