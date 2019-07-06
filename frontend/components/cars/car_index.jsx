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
        {/* {car.make} */} 
        If we got here, it works.
          
      </div>
    )
  }

}

export default CarIndex;