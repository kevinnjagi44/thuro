export const fetchCars = () => {
  return (
    $.ajax({
      method: 'GET',
      url: "/api/cars",
      error: (err) => console.log(err)
    })
  );
};