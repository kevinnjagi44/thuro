export const fetchRentals = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/rentals'
    })
  );
};

export const fetchRental = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/rentals/${id}`
    })
  );
};

export const createRental = (rental) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/rentals`,
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

export const deleteRental = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/rentals/${id}`
    })
  );
};