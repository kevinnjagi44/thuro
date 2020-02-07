import * as ReviewAPIUtil from '../util/review_api_util';

// Types
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

// Actions
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: DELETE_REVIEW,
  reviewId: review.id
});

// Action Creators
export const fetchReviews = carId => dispatch => (
  ReviewAPIUtil.fetchReviews(carId)
    .then(reviews => (
      dispatch(receiveReviews(reviews))
    ))
);

export const fetchReview = reviewId => dispatch => (
  ReviewAPIUtil.fetchReview(reviewId)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);

export const createReview = review => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);

export const editReview = review => dispatch => (
  ReviewAPIUtil.editReview(review)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);

export const deleteReview = review => dispatch => (
  ReviewAPIUtil.deleteReview(review)
    .then(review => (
      dispatch(removeReview(review))
    ))
);