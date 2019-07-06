import React from 'react';
import { Link } from 'react-router-dom';

class CarIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    return (

      <div>
        <div className="search-filter-btns">
          <button>Sort by</button>
          <button>Price</button>
          <button>Book instantly</button>
          <button>Delivery</button>
          <button><img src="https://github.com/fsiino/torino/blob/master/app/assets/images/filters.png?raw=true" />&nbsp;More Filters</button>
        </div>


        <div className="car-index-container">
          {this.props.cars.map(car=>
            <div>
              {car.year}<br/>
              {car.make}<br />
              {car.model}<br />
              {car.price}<br />
            </div>
            )}
            
        </div>
      </div>
    )
  }

}

export default CarIndex;