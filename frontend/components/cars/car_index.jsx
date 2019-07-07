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
          <button>Sort by</button>&nbsp;&nbsp;
          <button>Price</button>&nbsp;&nbsp;
          <button>Book instantly</button>&nbsp;&nbsp;
          <button>Delivery</button>&nbsp;&nbsp;
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