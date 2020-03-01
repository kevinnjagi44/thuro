import React from 'react';
import { withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';


class CarIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { id, rate, make, model, year } = this.props.car;

    return ( 
      <div className="car-tile-container">
        <Link to={`/cars/${id}`}>
          <div className="car-index-photo-wrapper">
            <img className="car-index-photo" src={this.props.car.photoUrl || this.props.car.photoUrls[0]} />
          </div>
        </Link>
        <div className="car-price">
          ${rate}<span className="price-per-day"> /day</span>
        </div>
        <div className="car-make-model-year-container">
          <span className="car-make-model">
            {make}&nbsp;{model}
          </span>
          <span className="car-year">
            &nbsp;{year}<br />
          </span>
        </div>
      </div>
    )
  }

}

export default withRouter(CarIndexItem);