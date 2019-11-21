import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './configureStore';
// import LocaleContext from './context/localeContext';
import ErrorBoundary from './components/ErrorBoundary';
// import { TodoContextComponent } from './context/todoContext';
import './index.css';

ReactDOM.render(
  <ErrorBoundary>
    {/* <TodoContextComponent> */}
    {/* <LocaleContext> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </LocaleContext> */}
    {/* </TodoContextComponent> */}
  </ErrorBoundary>,
  document.getElementById('root'),
);
