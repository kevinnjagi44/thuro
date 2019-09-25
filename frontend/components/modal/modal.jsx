import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewFormContainer from '../reviews/review_form_container';

// function Modal({ modal, closeModal }) {
function Modal(props) {
  const { closeModal } = props;
  let carId;
  let modal;

  if (props.modal && typeof props.modal === 'object') {
    modal = props.modal.modal;

    if (props.modal.carId) {
      carId = props.modal.carId;
    }

  } else {
    modal = props.modal;
  }

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'create-review':
      component = <ReviewFormContainer carId={carId}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);