import React from 'react';
import { withRouter } from 'react-router-dom';
import CarIndexItem from '../cars/car_index_item';
import { openReviewModal } from '../../actions/modal_actions';
import moment from 'moment';

class RentalIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.state = {
      todaysDate: new Date()
    };
  }

  handleDelete(rentalId) {
    this.props.deleteRental(rentalId);
  }

  handleCreateReview(modal, carId) {
    this.props.openReviewModal(modal, carId);
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

    const ShowButton = (todaysDate, start_date) => {
      if (start_date < todaysDate) {
        // return (
        //   <button className="rental-create-review-btn" onClick={() => dispatch(openReviewModal('create-review', rental.car.id)) }>Write A Review</button> 
        // )
      } else {
        return (
          <button className="rental-cancel-btn" onClick={() => { if (window.confirm('Are you sure you wish to cancel this rental?')) { this.handleDelete(rental.id) } }}>Cancel Rental</button>
        )
      }
    }

    return (
      <>
        <CarIndexItem 
          car={rental.car}
        />
        <div className="rental-index-tile-details">
          <ul className="rental-index-ul">
            <li>
              Status: 
            </li>
            <li>
              Pickup: 
            </li>
            <li>
              Dropoff: 
            </li>
            <li>
              # of Days: 
            </li>
            <li>
              Daily Rate: 
            </li>
            <li style={{"fontWeight": "700"}}>
              Total: 
            </li>
          </ul>

          <ul className="rental-index-ul">
            <li>
              {rental.status.slice(0, 1).toUpperCase() + rental.status.slice(1)}
            </li>
            <li>
              {ConvertDate(rental.start_date)}
            </li>
            <li>
              {ConvertDate(rental.end_date)}
            </li>
            <li>
              {(() => {
                let days = CalcDays(rental.end_date, rental.start_date);
                return days > 1 ? `${days} days` : `${days} day`;
              })()}
            </li>
            <li>
              ${car.rate} per day
            </li>
            <li style={{"fontWeight": "700"}}>
              ${car.rate * CalcDays(rental.end_date, rental.start_date)}
            </li>
          </ul>
        </div>
        <div className="rental-index-tile-btns">
          {/* <button onClick={() => { if (window.confirm('Are you sure you wish to cancel this rental?')) {this.handleDelete(rental.id)} } }>Cancel Rental</button> */}
          <br/>
          {ShowButton(moment(this.state.todaysDate), moment(rental.start_date))}
          {/* <button onClick={this.handleCreateReview('create-review', car.id)}>Write A Review</button> */}
          {/* <button onClick={() => dispatch(openReviewModal('create-review', rental.car.id)) }>Write A Review</button> */}
        </div>
      </>

    )
  }

}

export default withRouter(RentalIndexItem);