import * as RentalAPIUtil from '../util/rental_api_util';

// Types
export const RECEIVE_RENTALS = 'RECEIVE_RENTALS';
export const RECEIVE_RENTAL = 'RECEIVE_RENTAL';
export const DELETE_RENTAL = 'DELETE_RENTAL';
// export const RECEIVE_RENTAL_ERRORS = 'RECEIVE_RENTAL_ERRORS';

// Actions
export const receiveRentals = rentals => ({
  type: RECEIVE_RENTALS,
  rentals
});

export const receiveRental = rental => ({
  type: RECEIVE_RENTAL,
  rental
});

export const removeRental = rental => ({
  type: DELETE_RENTAL,
  rentalId: rental.id
});

// export const receiveErrors = (errors) => ({
//   type: RECEIVE_RENTAL_ERRORS,
//   errors
// });

// Action Creators
export const fetchRentals = () => dispatch => (
  RentalAPIUtil.fetchRentals()
    .then(rentals => (
      dispatch(receiveRentals(rentals))
    ))
); 

export const fetchRental = rentalId => dispatch => (
  RentalAPIUtil.fetchRental(rentalId)
    .then(rental => (
      dispatch(receiveRental(rental))
    ))
);

export const createRental = rental => dispatch => (
  RentalAPIUtil.createRental(rental)
    .then(rental => (
      dispatch(receiveRental(rental))
    ))
);

export const editRental = (rental, rentalId) => dispatch => (
  RentalAPIUtil.editRental(rental, rentalId)
    .then(rental => (
      dispatch(receiveRental(rental))
    ))
);  

export const deleteRental = id => dispatch => (
  RentalAPIUtil.deleteRental(id)
    .then(rental => (
      dispatch(removeRental(rental))
    ))
);