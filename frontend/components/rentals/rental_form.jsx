import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class RentalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      status: null,
      focusedInput: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const newRental = {
      renter_id: this.props.currentUserId,
      car_id: parseInt(this.props.match.params.id),
      start_date: this.state.start_date._d,
      end_date: this.state.end_date._d,
      status: 'approved'
    };
    this.props.processForm(newRental)
    .then(document.getElementById("pre-rental").innerHTML = ("<h2>Rental Booked!</h2>"))
    .then(document.getElementById("pre-rental").setAttribute("id", "rental-requested"))
    .then(document.getElementById("rental-book-btn").style.display = "none");
      // .then(alert("Booking Requested!"));
  }

  render() {
    return (
      <div className="rental-form-wrapper">
        <div className="rental-date-time-wrapper" id="pre-rental">
        <DateRangePicker
          startDate={this.state.start_date}  
          startDateId="start_date" 
          endDate={this.state.end_date} 
          endDateId="end_date" 
          onDatesChange={({ startDate, endDate }) => this.setState({ start_date: startDate, end_date: endDate })} 
          focusedInput={this.state.focusedInput} 
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />

        </div>

        <button id="rental-book-btn" onClick={this.handleSubmit}>Book Now</button>
        
      </div>
    )
  }
}

export default withRouter(RentalForm);