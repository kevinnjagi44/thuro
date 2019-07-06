import * as APIUtil from '../util/car_api_util';

export const RECEIVE_CARS = 'RECEIVE_CARS';
export const RECEIVE_CAR = 'RECEIVE_CAR';
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveCars = cars => ({
  type: RECEIVE_CARS,
  cars
});

export const receiveCar = car => ({
  type: RECEIVE_CAR,
  car
  // reviews
});

export const fetchCars = () => dispatch => (
  APIUtil.fetchCars().then(cars => (
    dispatch(receiveCars(cars))
  ))
);

export const fetchCar = (car) => dispatch => (
  APIUtil.fetchCar().then(car => (
    dispatch(receiveCar(car))
  ))
);

