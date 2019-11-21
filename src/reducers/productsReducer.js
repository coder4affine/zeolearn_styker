import { SAVE_PRODUCT, SUCCESS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${SAVE_PRODUCT}_${SUCCESS}`:
      return [...state, payload];

    default:
      return state;
  }
};
