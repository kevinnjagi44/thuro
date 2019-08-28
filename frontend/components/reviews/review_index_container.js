import { connect } from 'react-redux';
import { fetchReviews, fetchReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mSTP = (state) => {
  return {
    reviews: state.entities.reviews
  }
}

const mDTP = (dispatch) => {
  return {
    fetchReviews: (carId) => dispatch(fetchReviews(carId)) 
  }
}

export default connect( 
  mSTP,
  mDTP
)(ReviewIndex);