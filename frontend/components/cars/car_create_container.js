import {connect} from 'react-redux';
import {createCar} from '../../actions/car_actions';
import CarCreate from './car_create';

const mSTP = state => {
  return {
    formfields: {
      // owner_id: state.session.id,
      // ownerId: state.session.id,
      rate: '',
      make: '',
      model: '',
      year: '',
      color: '',
      transmission: '',
      seats: '',
      mpg: '',
      description: '',
      plate: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      lat: 0,
      lng: 0,
      awd: false,
      audioInput: false,
      bikeRack: false,
      bluetooth: false,
      childSeat: false,
      convertible: false,
      gps: false,
      heatedSeats: false,
      longtermCar: false,
      petFriendly: false,
      skiRack: false,
      snowTiresChains: false,
      sunroof: false,
      tollPass: false,
      usbInput: false,
      photos: []
    },
    formType: 'create',
    errors: state.errors.session,
    currentUserId: state.session.id
  };
};

const mDTP = dispatch => ({
  createCar: (car) => dispatch(createCar(car))
});

export default connect(
  mSTP,
  mDTP
)(CarCreate);