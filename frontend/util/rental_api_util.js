export const fetchRentals = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/rentals',
      data: { userId }
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
      url: 'api/rentals',
      data: rental
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