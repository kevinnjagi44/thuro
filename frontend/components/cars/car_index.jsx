import React from 'react';
import CarMap from '../car_map/car_map';

import CarIndexItem from './car_index_item';

class CarIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchCars();
    window.scrollTo(0, 0);
  }

  render() {

    const { cars } = this.props;

    const carItems = cars.map(car => {
      return (
        <div key={car.id}>
          <CarIndexItem car={car} />
        </div>
      )
    })
 
    return (

      <div>

        <div className="search-filter-btns">
          <button>Sort by</button>&nbsp;&nbsp;
          <button>Price</button>&nbsp;&nbsp;
          <button>Book instantly</button>&nbsp;&nbsp;
          <button>Delivery</button>&nbsp;&nbsp;
          <button><img src="https://github.com/fsiino/thuro/blob/master/app/assets/images/filters.png?raw=true" />&nbsp;More Filters</button>
        </div>

        <div className="car-index-container">
          <div className="car-listings-container">
              {carItems}
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