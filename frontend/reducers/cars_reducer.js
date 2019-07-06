import merge from 'lodash/merge';

import { RECEIVE_CARS } from '../actions/car_actions';


const carsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARS:
      return action.benches;
    default:
      return state;
  }
};

export default carsReducer;