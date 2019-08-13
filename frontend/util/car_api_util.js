export const fetchCars = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/cars'
      // data
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
      data: car,
      contentType: false,
      processData: false            
    })
  );
};

// export const createCar = (car) => {
//   return (
//     $.ajax({
//       method: 'POST',
//       url: '/api/cars',
//       data: {
//         car : {
//           bike_rack: car.bikeRack, 
//           awd: car.awd,
//           audioInput: car.audioInput,
//           bikeRack: car.bikeRack,
//           bluetooth: car.bluetooth,
//           childSeat: car.childSeat,
//           convertible: car.convertible,
//           gps: car.gps,
//           heatedSeats: car.heatedSeats,
//           longtermCar: car.longtermCar,
//           petFriendly: car.petFriendly,
//           skiFack: car.skiRack,
//           snowTiresChains: car.snowTiresChains,
//           sunroof: car.sunroof,
//           tollPass: car.tollPass,
//           usbInput: car.usbInput,
//         },
//         contentType: false,
//         processData: false          
//       }
//     })
//   );
// };

export const editCar = (car, carId) => {
  return (
    $.ajax({
      method: 'PATCH',
      // url: `/api/cars/${car.id}`,
      url: `/api/cars/${carId}`,
      data: {car}
      // contentType: false,
      // processData: false   
    })
  );
};

export const deleteCar = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/cars/${id}`
    })
  );
};