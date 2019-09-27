import { connect } from 'react-redux';

import Notifications from './notifications';

const mSTP = (state) => {
  let myPendingRentals = Object.values(state.entities.cars)
    .filter(c => c.rentals.length && c.owner_id === state.session.id)
    .map(c => c.rentals).flat().filter(r => r.status === 'pending');
  return {
    myPendingRentals
  };
};

const mDTP = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars())
  };
};


export default connect(
  mSTP,
  mDTP
)(Notifications);