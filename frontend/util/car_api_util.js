export const fetchCars = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/cars'
    })
  );
};

export const fetchCar = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/cars/${id}`
    })
  );
};

export const createCar = (car) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/cars',
      data: {car}
    })
  );
};

export const editCar = (car) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/cars/${car.id}`,
      data: {car}
    })
  );
};

export const deleteCar = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/cars/${id}`
    })
  )
}