import {CHECK_AUTH, SUCCESS} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case `${CHECK_AUTH}_${SUCCESS}`:
      return {...state, ...payload};

    default:
      return state;
  }
};
