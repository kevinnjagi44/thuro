import { connect } from 'react-redux';
import { createRental, clearRentalErrors } from '../../actions/rental_actions';
import RentalForm from './rental_form';
// import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUserId: state.session.id,
  // errors: Object.values(state.errors.rentals)
});

const mDTP = dispatch => ({
  processForm: rental => dispatch(createRental(rental)),
  // openModal: modal => dispatch(openModal(modal)),
  // clearRentalErrors: () => dispatch(clearRentalErrors())
});

export default connect(mSTP, mDTP)(RentalForm);