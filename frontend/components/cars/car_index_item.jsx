import React from 'react';
import { withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';


class CarIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { id, photoUrl, rate, make, model, year } = this.props.car;

    return ( 
      <div className="car-tile-container">
        {/* <Link to={`/cars/${car.id}`}> */}
        <Link to={`/cars/${id}`}>
          <div className="car-index-photo-wrapper">
            {/* <img className="car-index-photo" src={car.photoUrl} /> */}
            <img className="car-index-photo" src={photoUrl} />
          </div>
        </Link>
        <div className="car-price">
          {/* ${car.rate}<span className="price-per-day"> /day</span> */}
          ${rate}<span className="price-per-day"> /day</span>
        </div>
        <div className="car-make-model-year-container">
          <span className="car-make-model">
            {/* {car.make}&nbsp;{car.model} */}
            {make}&nbsp;{model}
          </span>
          <span className="car-year">
            {/* &nbsp;{car.year}<br /> */}
            &nbsp;{year}<br />
          </span>
        </div>
      </div>
    )
  }

}

export default withRouter(CarIndexItem);