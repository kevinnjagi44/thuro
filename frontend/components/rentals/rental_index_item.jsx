import React from 'react';
import { withRouter } from 'react-router-dom';
import CarIndexItem from '../cars/car_index_item';

class RentalIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rental } = this.props;

    const { car } = this.props;
// debugger

    return (

    <div className="rental-index-container">
        <CarIndexItem 
          car={rental.car}
        />
    </div>

    )
  }

}

export default withRouter(RentalIndexItem);