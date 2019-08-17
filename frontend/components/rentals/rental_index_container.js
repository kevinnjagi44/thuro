import { connect } from 'react-redux';
import RentalIndex from './rental_index';
import { fetchRentals, deleteRental } from '../../actions/rental_actions';

const mSTP = (state) => {
  return {
    rentals: Object.values(state.entities.rentals)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchRentals: () => dispatch(fetchRentals()),
    editRental: (rental) => dispatch(editRental(rental)),
    deleteRental: (rentalId) => dispatch(deleteRental(rentalId)),
    fetchCar: (id) => dispatch(fetchCar(id))
  };
};

export default connect(
  mSTP,
  mDTP
)(RentalIndex);