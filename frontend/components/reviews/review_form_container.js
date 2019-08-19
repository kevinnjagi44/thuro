import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    carId: ownProps.carId
  };
};

const mDTP = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mSTP,
  mDTP
)(ReviewForm);