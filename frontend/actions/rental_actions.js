import * as RentalAPIUtil from '../util/rental_api_util';

export const RECEIVE_RENTALS = 'RECEIVE_RENTALS';
export const RECEIVE_RENTAL = 'RECEIVE_RENTAL';
export const DELETE_RENTAL = 'DELETE_RENTAL';
// export const RECEIVE_RENTAL_ERRORS = 'RECEIVE_RENTAL_ERRORS';

/* Actions */

export const receiveRentals = (rentals) => ({
  type: RECEIVE_RENTALS,
  rentals
});

export const receiveRental = (payload) => ({
  type: RECEIVE_RENTAL,
  payload
});

export const removeRental = (rental) => ({
  type: DELETE_RENTAL,
  rentalId: rental.id
});

// export const receiveErrors = (errors) => ({
//   type: RECEIVE_RENTAL_ERRORS,
//   errors
// });

/* Thunk Action Creators */

export const fetchRentals = () => {
  RentalAPIUtil.fetchRentals().then(car => (
    dispatch(receiveRentals(car))
  ));
}; 

export const fetchRental = (id) => {
  RentalAPIUtil.fetchRental(id).then(car => (
    dispatch(receiveRental(car))
  ));
};

export const createRental = (rental) => {
  RentalAPIUtil.createRental(rental).then(rental => (
    dispatch(receiveRental(rental))
  ));
};

export const editRental = (rental) => {
  RentalAPIUtil.editRental(rental).then(rental => (
    dispatch(receiveRental(rental))
  ));
};

export const deleteRental = (id) => {
  RentalAPIUtil.deleteRental(id).then(rental => (
    dispatch(removeRental(rental))
  ));
};