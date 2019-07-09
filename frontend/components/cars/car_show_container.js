import { connect} from 'react-redux';
import { fetchCar, deleteCar } from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps) => {
  // debugger
  const carId = ownProps.match.params.id;
  return ({
    car: state.entities.cars[carId],
    currentUserId: state.session.id,
  });
  // debugger
};

const mDTP = (dispatch) => ({
  fetchCar: (id) => dispatch(fetchCar(id)),
  deleteCar: (id) => dispatch(deleteCar(id))
});

export default connect(
  mSTP,
  mDTP
)(CarShow);
