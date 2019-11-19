/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => {
    return {
      hasError: true,
    };
  };

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Oops! something went wrong</h1>;
    }
    return children;
  }
}
