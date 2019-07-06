import { combineReducers } from 'redux';

// import carsReducer from 'cars_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  users: usersReducer,
  // cars: carsReducer
});
