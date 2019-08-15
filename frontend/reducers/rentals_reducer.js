import { merge } from 'lodash/merge';
import { 
  RECEIVE_RENTALS, 
  RECEIVE_RENTAL, 
  DELETE_RENTAL 
} from '../actions/rental_actions';

const rentalsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_RENTALS:
      return merge({}, state, action.rentals);
    case RECEIVE_RENTAL:
      return Object.assign({}, state, { [action.rental.id]: action.rental });
    case DELETE_RENTAL:
      newState = Object.assign({}, state);
      delete newState[action.rentalId];
      return newState;
    default:
      return state;
  }
};

export default rentalsReducer;
