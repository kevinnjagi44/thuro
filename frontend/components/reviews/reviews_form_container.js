import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from '/reviews_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    currentUserId: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    processForm: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mSTP,
  mDTP
)(ReviewForm);