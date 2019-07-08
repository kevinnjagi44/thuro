import {connect} from 'react-redux';
import {createCar} from '../../actions/car_actions';
import CarCreate from './car_create';

const mapStateToProps = state => ({
  formfields: {
    ownerId: state.session.id,
    rate: '',
    make: '',
    model: '',
    year: '',
    color: '',
    transmission: '',
    seats: '',
    description: '',
    plate: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    lat: -0,
    lng: 0
  },
  formType: 'create'
});

const mapDispatchToProps = dispatch => ({
  createCar: car => dispatch(createCar(car))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarCreate);