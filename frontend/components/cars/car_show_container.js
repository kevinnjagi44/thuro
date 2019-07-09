import { connect} from 'react-redux';
import { fetchCar } from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps) => {
  const carId = ownProps.match.params.id;
  return ({
    car: state.entities.cars[carId],
    currentUser: state.session.id
  });
};

const mDTP = (dispatch) => ({
  fetchCar: (id) => dispatch(fetchCar(id))
});

export default connect(
  mSTP,
  mDTP
)(CarShow);