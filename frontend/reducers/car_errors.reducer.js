import {
  RECEIVE_CAR_ERRORS,
  RECEIVE_CAR,
  CLEAR_CAR_ERRORS
} from '../actions/car_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAR_ERRORS:
      // return action.errors;
      if (action.errors.length) {
        return action.errors;
      } else {
        return null;
      }
    case RECEIVE_CAR:
      return [];
    case CLEAR_CAR_ERRORS:
      return [];
    default:
      return state;
  }
};
