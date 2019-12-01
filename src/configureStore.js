import {createStore, applyMiddleware, compose} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware = [
  sagaMiddleware,
  createReactNavigationReduxMiddleware(state => state.nav),
];

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware = [...middleware];
} else {
  middleware = [...middleware];
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

// store.dispatch({type: 'SIGN_OUT'});

export default store;
