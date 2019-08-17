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

    const { car } = this.props.rental;

    const ConvertDate = (date) => {
      let newDate = new Date(date);
      return `${1 + newDate.getMonth()}/${newDate.getDate()}/${1900 + newDate.getYear()}`;
    };

    const CalcDays = (end, start) => {
      let numDays = Math.abs((new Date(end) - new Date(start)) / 3600000) / 24;

      return numDays;
    };

    return (
      <>
        <CarIndexItem 
          car={rental.car}
        />
        <div className="rental-index-tile-details">
          {rental.status.slice(0, 1).toUpperCase() + rental.status.slice(1)}
          <br/>
          {ConvertDate(rental.start_date)} - {ConvertDate(rental.end_date)}
          <br/>
          {(() => {
            let days = CalcDays(rental.end_date, rental.start_date);
            return days > 1 ? `${days} days` : `${days} day`;
          })()}
          <br/>
          ${car.rate} per day
          <br/>
          Total: ${car.rate * CalcDays(rental.end_date, rental.start_date)}
        </div>
        <div className="rental-index-tile-details">
          <button onClick={() => { if (window.confirm('Are you sure you wish to cancel this rental?')) {this.handleDelete(rental.id)} } }>Cancel Rental</button>
        </div>
      </>

    )
  }

}

export default withRouter(RentalIndexItem);