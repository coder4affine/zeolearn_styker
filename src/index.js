import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import LocaleContext from './context/localeContext';
import ErrorBoundary from './components/ErrorBoundary';
import { TodoContextComponent } from './context/todoContext';
import './index.css';

ReactDOM.render(
  <ErrorBoundary>
    <TodoContextComponent>
      <LocaleContext>
        <App />
      </LocaleContext>
    </TodoContextComponent>
  </ErrorBoundary>,
  document.getElementById('root'),
);
