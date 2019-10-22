import {connect} from 'react-redux';
import {createCar, clearCarErrors} from '../../actions/car_actions';
import CarCreate from './car_create';

const mSTP = state => {
  return {
    formType: 'create',
    errors: state.errors.car,
    currentUserId: state.session.id,
  };
};

const mDTP = dispatch => ({
  createCar: (car) => dispatch(createCar(car)),
  clearCarErrors: () => dispatch(clearCarErrors())
});

export default connect(
  mSTP,
  mDTP
)(CarCreate);