import React from 'react';
import { Link } from 'react-router-dom';

class CarShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="car-show-container">
        <h1>Hi, this is the show page</h1>
        <br/>
        <Link to={`/cars/${this.props.car.id}/edit`}>
          <button>Edit this car</button>
        </Link>
      </div>
    )
  }
}

export default CarShow;