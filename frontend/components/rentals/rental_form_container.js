import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { createRental } from '../../actions/rental_actions';
import RentalForm from './rental_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
    rentals: state.entities.rentals,
    car: state.entities.cars[ownProps.match.params.carId],
    currentUser: state.entities.users[state.session.id]
  });
};

const mDTP = (dispatch) => {
  return ({
    createRental: (rental) => dispatch(createRental(rental))
  });
};

export default withRouter(connect(
  mSTP,
  mDTP
)(RentalForm));