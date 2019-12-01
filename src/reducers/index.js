import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {App} from '../navigation';
import todo from './todoReducer';
import auth from './authReducer';
import error from './errorReducer';
import loading from './loadingReducer';

const navReducer = createNavigationReducer(App);

export default combineReducers({
  nav: navReducer,
  todo,
  auth,
  error,
  loading,
});
