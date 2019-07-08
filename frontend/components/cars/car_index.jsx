import React from 'react';
import { Link } from 'react-router-dom';
import CarMap from '../car_map/car_map';

class CarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 5
    };
  }
  
  componentDidMount() {
    this.props.fetchCars();
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div>

        <div className="search-filter-btns">
          <button>Sort by</button>&nbsp;&nbsp;
          <button>Price</button>&nbsp;&nbsp;
          <button>Book instantly</button>&nbsp;&nbsp;
          <button>Delivery</button>&nbsp;&nbsp;
          <button><img src="https://github.com/fsiino/torino/blob/master/app/assets/images/filters.png?raw=true" />&nbsp;More Filters</button>
        </div>


        <div className="car-index-container">
          <div className="car-index-items">
          {this.props.cars.map(car=>
            <div className="car-tile-container">
              <img className="car-idx-photo" src={car.photoUrl} />
              <div className="car-price">
                {car.rate}
              </div>
              <div className="car-make-model-yr">{car.make}&nbsp;
                {car.model}<br /></div>
                {car.year}<br/>
              </div>
            )}
          </div>
            
            <div className="car-map-container">
              <CarMap cars={this.props.cars} />
            </div>

        </div>

      </div>


    )
  }

}

export default CarIndex;