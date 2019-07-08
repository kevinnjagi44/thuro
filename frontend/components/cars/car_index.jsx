import React from 'react';
import CarMap from '../car_map/car_map';
import { Link } from 'react-router-dom';

class CarIndex extends React.Component {
  constructor(props) {
    super(props);
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
          <div className="car-listings-container">
          {this.props.cars.map(car=>
            <div className="car-tile-container">
              <Link to={`/cars/${car.id}`}>
                <div className="car-idx-photo">
                  <img className="car-idx-photo" src={car.photoUrl} />
                </div>
              </Link>
              <div className="car-price">
                ${car.rate} /day
              </div>
              <div className="car-make-model-yr">{car.make}&nbsp;
                {car.year}<br/>
                {car.model}<br />
              </div>
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