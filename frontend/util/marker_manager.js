class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(cars) {
    const carsObj = {};
    cars.forEach(car => carsObj[car.id] = car);

    cars
      .filter(car => !this.markers[car.id])
      .forEach(newCar => this.createMarkerFromCar(newCar, this.handleClick))

    Object.keys(this.markers)
      .filter(car_id => !carsObj[car_id])
      .forEach((car_id) => this.removeMarker(this.markers[car_id]));
  }

  createMarkerFromCar(car) {
    const position = new google.maps.LatLng(car.lat, car.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      car_id: car.id
    });

    marker.addListener('click', () => this.handleClick(car));
    this.markers[marker.car_id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.car_id].setMap(null);
    delete this.markers[marker.car_id];
  }
}

export default MarkerManager;
