import * as APIUtil from '../util/car_api_util';

export const RECEIVE_CARS = 'RECEIVE_CARS';
export const RECEIVE_CAR = 'RECEIVE_CAR';
export const DELETE_CAR = 'DELETE_CAR';
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCars = (cars) => ({
  type: RECEIVE_CARS,
  cars
});

export const receiveCar = (car) => ({
  type: RECEIVE_CAR,
  car
  // reviews
});

export const removeCar = (car_id) => ({
  type: DELETE_CAR,
  car_id: car_id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// ******************************* //

export const fetchCars = () => dispatch => (
  APIUtil.fetchCars().then(cars => (
    dispatch(receiveCars(cars))
  ))
);

export const fetchCar = (id) => dispatch => (
  APIUtil.fetchCar(id).then(car => (
    dispatch(receiveCar(car))
  ))
);

export const createCar = (car) => dispatch => (
  APIUtil.createCar(car).then(car => (
    dispatch(receiveCar(car)), errors => dispatch(receiveErrors(errors))
  ))
);

export const editCar = (car, car_id) => dispatch => (
  APIUtil.editCar(car, car_id).then(car => (
    dispatch(receiveCar(car))
  ))
);

export const deleteCar = (id) => dispatch => (
  APIUtil.deleteCar(id).then(car => (
    dispatch(removeCar(car))
  ))
);