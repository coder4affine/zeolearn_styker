import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App label={20} type="text" value="" onChange={() => {}} placeholder="Enter Value" />
  </ErrorBoundary>,
  document.getElementById('root'),
);
