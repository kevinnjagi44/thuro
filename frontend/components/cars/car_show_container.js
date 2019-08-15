import { connect} from 'react-redux';
import { fetchCar, deleteCar } from '../../actions/car_actions';
import CarShow from './car_show';

import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  const carId = ownProps.match.params.id;
  return ({
    car: state.entities.cars[carId],
    currentUserId: state.session.id,
  });
};

const mDTP = (dispatch) => ({
  fetchCar: (id) => dispatch(fetchCar(id)),
  deleteCar: (id) => dispatch(deleteCar(id)),

  openModal: (modal) => dispatch(openModal(modal))

});

export default connect(
  mSTP,
  mDTP
)(CarShow);
