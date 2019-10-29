import { connect} from 'react-redux';
import { fetchCar, deleteCar } from '../../actions/car_actions';
import CarShow from './car_show';
import { openModal, closeModal } from '../../actions/modal_actions';


import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
  // debugger
  const reviews = Object.values(state.entities.reviews)
  let revScores = reviews.map(review => review.rating)
  let revScoreSum = revScores.reduce((acc, el) => acc + el, 0)

  const carId = ownProps.match.params.id; 
  
  return {
    car: state.entities.cars[carId],
    currentUserId: state.session.id,
    reviews: reviews,
    avgReviewScore: Math.round(revScoreSum / reviews.length - 0.5) + 0.5
  };
};

const mDTP = (dispatch) => ({
  fetchCar: (id) => dispatch(fetchCar(id)),
  deleteCar: (id) => dispatch(deleteCar(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchReviews: (id) => dispatch(fetchReviews(id))

});

export default connect(
  mSTP,
  mDTP
)(CarShow);
