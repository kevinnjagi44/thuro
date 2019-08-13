import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: 'signup',
    formFields: {
      fname: '',
      lname: '',
      email: '',
      password: ''
    },
    navLink: <Link to="/login">Log In Instead</Link>
  });
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
