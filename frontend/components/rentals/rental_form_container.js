import { connect } from 'react-redux';
import { createRental, clearRentalErrors } from '../../actions/rental_actions';
import RentalForm from './rental_form';

const mSTP = (state, ownProps) => {
  // debugger  
  return {
    currentUserId: state.session.id,
    // errors: Object.values(state.errors.rentals)
  };
};

const mDTP = dispatch => ({
  processForm: rental => dispatch(createRental(rental)),
  // clearRentalErrors: () => dispatch(clearRentalErrors())
});

export default connect(mSTP, mDTP)(RentalForm);