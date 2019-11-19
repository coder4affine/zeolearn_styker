import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import LocaleContext from './context/localeContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

ReactDOM.render(
  <ErrorBoundary>
    <LocaleContext>
      <App />
    </LocaleContext>
  </ErrorBoundary>,
  document.getElementById('root'),
);
