import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
// import carErrorsReducer from './car_errors.reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  // car: carErrorsReducer
});
