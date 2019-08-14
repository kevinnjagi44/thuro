export const fetchRentals = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/rentals'
    })
  );
};

export const fetchRental = (rentalId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/rentals/${rentalId}`
    })
  );
};

export const createRental = (rental) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/cars/${rental.id}/rentals`,
      data: { rental }
    })
  );
};

export const editRental = (rental) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/rentals/${rental.id}`,
      data: { rental }
    })
  );
};

export const deleteRental = (rentalId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/rentals/${rentalId}`
    })
  );
};