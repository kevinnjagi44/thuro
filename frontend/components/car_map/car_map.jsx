import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


import MarkerManager from '../../util/marker_manager';

// const getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });


class CarMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      }, // San Francisco coords
      zoom: 11
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    // if (this.props.singleCar) {
    //   this.props.fetchCar(this.props.carId);
    // } else {
      // this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.cars);
    // }
  }

  componentDidUpdate() {
    // if (this.props.singleCar) {
    //   const targetCarKey = Object.keys(this.props.cars)[0];
    //   const targetCar = this.props.cars[targetCarKey];
    //   this.MarkerManager.updateMarkers([targetCar]); //grabs only that one car
    // } else {
      this.MarkerManager.updateMarkers(this.props.cars);
    // }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', (event) => {
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  }

  handleMarkerClick(car) {
    this.props.history.push(`cars/${car.id}`);
  }

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: 'cars/new',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default CarMap;
