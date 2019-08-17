import React from 'react';
import { withRouter } from 'react-router-dom';
import CarIndexItem from '../cars/car_index_item';

class RentalIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(rentalId) {
    this.props.deleteRental(rentalId);
  }

  render() {
    const { rental } = this.props;

    const { car } = this.props;

    return (

      <>
        <CarIndexItem 
          car={rental.car}
        />
        <div className="rental-index-tile-details">
          <button onClick={() => this.handleDelete(rental.id)}>Cancel Booking</button>
        </div>
      </>

    )
  }

}

export default withRouter(RentalIndexItem);