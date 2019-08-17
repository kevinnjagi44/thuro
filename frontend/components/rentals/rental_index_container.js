import { connect } from 'react-redux';
import RentalIndex from './rental_index';
import { fetchRentals, deleteRental } from '../../actions/rental_actions';

const mSTP = (state) => {
  return {
    rentals: Object.values(state.entities.rentals),
    currentUserId: state.session.id
  };
};

const mDTP = (dispatch) => {
  return {
    fetchRentals: () => dispatch(fetchRentals()),
    editRental: (rental) => dispatch(editRental(rental)),
    deleteRental: (rentalId) => dispatch(deleteRental(rentalId)),
  };
};

export default connect(
  mSTP,
  mDTP
)(RentalIndex);