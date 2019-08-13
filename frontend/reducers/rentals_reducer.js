import { merge } from 'lodash/merge';
import { 
  RECEIVE_RENTALS, 
  RECEIVE_RENTAL, 
  DELETE_RENTAL 
} from '../actions/rental_actions';
import { RECEIVE_CAR } from '../actions/car_actions';

const rentalsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_CAR:
      return merge({}, state, action.rentals);
    case RECEIVE_RENTALS:
      return action.cars;
    case RECEIVE_RENTAL:
      return merge({}, state, action.rental);
    case DELETE_RENTAL:
      newState = Object.assign({}, state);
      delete newState[action.rentalId];
      return newState;
    default:
      return state;
  }
};

export default rentalsReducer;