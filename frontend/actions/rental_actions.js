import * as APIUtil from '../util/rental_api_util';

export const RECEIVE_RENTALS = 'RECEIVE_RENTALS';
export const RECEIVE_RENTAL = 'RECEIVE_RENTAL';
export const DELETE_RENTAL = 'DELETE_RENTAL';
export const RECEIVE_RENTAL_ERRORS = 'RECIEVE_RENTAL_ERRORS';

/* Actions */

export const receiveRentals = (rentals) => ({
  type: RECEIVE_RENTALS,
  rentals
});

export const receiveRental = (rental) => ({
  type: RECEIVE_RENTAL,
  rental
});

export const removeRental = (rentalId) => ({
  type: DELETE_RENTAL,
  rentalId: rentalId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_RENTAL_ERRORS,
  errors
});

/* Thunk Action Creators */

export const fetchRentals = (userId) => {
  APIUtil.fetchRentals(userId).then(rentals => (
    dispatch(receiveRentals(rentals))
  ));
}; 

export const fetchRental = (rentalId) => {
  APIUtil.fetchRental(rentalId).then(rental => (
    dispatch(receiveRental(rental))
  ));
};

export const createRental = (rental) => {
  APIUtil.createRental(rental).then(rental => (
    dispatch(receiveRental(rental)), errors => dispatch(receiveErrors(errors))
  ));
};

export const editRental = (rental) => {
  APIUtil.editRental(rental).then(rental => (
    dispatch(receiveRental(rental))
  ));
};

export const deleteRental = (rentalId) => {
  APIUtil.deleteRental(rentalId).then(rental => (
    dispatch(removeRental(rentalId))
  ));
};