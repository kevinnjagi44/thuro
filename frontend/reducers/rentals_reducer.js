// import { merge } from 'lodash/merge';
// import { 
//   RECEIVE_RENTALS, 
//   RECEIVE_RENTAL, 
//   DELETE_RENTAL 
// } from '../actions/rental_actions';

// const rentalsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let newState;

//   switch(action.type){
//     case RECEIVE_RENTALS:
//       return merge({}, state, action.rentals);
//     case RECEIVE_RENTAL:
//       // return merge({}, state, action.rental);
//       return merge({}, state, { [action.rental.id]: action.rental })
//     case DELETE_RENTAL:
//       newState = Object.assign({}, state);
//       delete newState[action.rentalId];
//       return newState;
//     default:
//       return state;
//   }
// };

// export default rentalsReducer;

import { RECEIVE_RENTALS, RECEIVE_RENTAL, DELETE_RENTAL } from '../actions/rental_actions';
import merge from 'lodash/merge';

const rentalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RENTALS:
      return action.rentals;
    case RECEIVE_RENTAL:
      const newrental = { [action.rental.id]: action.rental };
      return merge({}, oldState, newrental);
    case DELETE_RENTAL:
      const nextState = merge({}, oldState)
      delete nextState[action.rentalId]
      return nextState;
    default:
      return oldState;
  }
};

export default rentalsReducer;
