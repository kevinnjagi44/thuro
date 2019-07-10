import { connect} from 'react-redux';
import { fetchCar, deleteCar } from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps) => {
  const car_id = ownProps.match.params.id;
  return ({
    car: state.entities.cars[car_id],
    currentUserId: state.session.id,
  });
};

const mDTP = (dispatch) => ({
  fetchCar: (id) => dispatch(fetchCar(id)),
  deleteCar: (id) => dispatch(deleteCar(id))
});

export default connect(
  mSTP,
  mDTP
)(CarShow);
