import { connect } from 'react-redux';

import Notifications from './notifications';

const mSTP = (state) => {
  
  let allRentals = Object.values(state.entities.cars).filter(car => car.rentals);
  let rentalsForMyCars = allRentals.filter(r => r.owner_id = state.session.id);

  return {
    rentalsForMyCars
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