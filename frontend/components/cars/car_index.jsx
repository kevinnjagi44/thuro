import React from 'react';
import { Link } from 'react-router-dom';
import CarMap from '../car_map/car_map';

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
          {this.props.cars.map(car=>
            <div>
              <img className="car-idx-photo" src={car.photoUrl} width="100px"/>
              <div className="car-make-model">{car.make}&nbsp;
                {car.model}<br /></div>
              {car.year}<br/>
              {car.price}<br />
            </div>
            )}
            
        </div>

        {/* <CarMap/> */}
      </div>


      // <ul>
      //   {this.props.cars.map(car => {
      //     return (
      //       <li key={car.id}>
      //         <h2>{car.model}</h2>
      //         <img src={car.photoUrl} />
      //       </li>
      //     );
      //   })}
      // </ul>


    )
  }

}

export default CarIndex;