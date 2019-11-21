import { combineReducers } from 'redux';
import todo from './todoReducer';
import auth from './authReducer';
import error from './errorReducer';
import loading from './loadingReducer';

export default combineReducers({
  todo,
  auth,
  error,
  loading,
});
