import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: 'login',
    formFields: {
      email: '',
      password: ''
    },
    navLink: <Link to="/signup">Sign Up Instead</Link>
  });
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchRentals: () => dispatch(fetchRentals())
  };
};

export default connect(mSTP, mDTP)(SessionForm);