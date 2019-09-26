import { connect } from 'react-redux';

import Notifications from './notifications';

const mSTP = (state) => {
  // debugger
  
  let myPendingRentals = Object.values(state.entities.cars).filter(c => c.rentals.length).map(c => c.rentals).flat().filter(c => c.status === 'pending');

  return {
    myPendingRentals
  };
};

const mDTP = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars())
  };
}


export default connect(
  mSTP,
  mDTP
)(Notifications);