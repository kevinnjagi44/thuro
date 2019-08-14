import merge from 'lodash/merge';

import { RECEIVE_CARS, RECEIVE_CAR, DELETE_CAR } from '../actions/car_actions';

import { RECEIVE_RENTALS } from '../actions/rental_actions';

const carsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RENTALS:
      if (action.rentals) {
        return merge({}, state, action.cars);
      } else {
        return state;
      };
    case RECEIVE_CARS:
      return action.cars;
    case RECEIVE_CAR:
      return Object.assign({}, state, { [action.car.id]: action.car });
      // return merge ({}, state, action.car)
    case DELETE_CAR:
      newState = Object.assign({}, state)
      delete newState[action.carId];
      return newState;
    default:
      return state;
  }
};

export default carsReducer;