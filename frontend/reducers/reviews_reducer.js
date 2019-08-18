import { 
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  DELETE_REVIEW
} from '../actions/review_actions';
import { merge } from 'lodash';
import { RECEIVE_CAR } from '../actions/car_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_REVIEWS: {
      return merge({}, action.reviews);
    }
    case RECEIVE_REVIEW: {
      newState = merge({}, state);
      newState[action.review.id] = action.review;
    };
    case DELETE_REVIEW: {
      newState = merge({}, state);
      delete newState[action.reviewId];
    };
    case RECEIVE_CAR: {
      return merge({}, state, action.reviews);
    }
    default:
      return state;
  }
};

export default reviewsReducer;