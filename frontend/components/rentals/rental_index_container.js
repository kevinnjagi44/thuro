import { connect } from 'react-redux';
import RentalIndex from './rental_index';
import { fetchRentals, editRental, deleteRental } from '../../util/rental_api_util';

const mSTP = (state) => {
  return {
    rentals: Object.values(state.entities.rentals)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchRentals: () => dispatch(fetchRentals()),
    editRental: (rental) => dispatch(editRental(rental)),
    deleteRental: (rentalId) => dispatch(deleteRental(rentalId))
  };
};

export default connect(
  mSTP,
  mDTP
)(RentalIndex);