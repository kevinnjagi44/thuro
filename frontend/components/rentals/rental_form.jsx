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
      focusedInput: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const newRental = {
      renter_id: this.props.currentUserId,
      car_id: parseInt(this.props.match.params.carId),
      start_date: this.state.start_date._d,
      end_date: this.state.end_date._d
    };
    this.props.processForm(newRental)
      .then(alert("Booking Requested!"));
  }

  render() {
    // debugger
    return (
      <div className="rental-form-container">
        <DateRangePicker
          startDate={this.state.start_date} 
          startDateId="start_date" 
          endDate={this.state.end_date} 
          endDateId="end_date" 
          onDatesChange={({ startDate, endDate }) => this.setState({ start_date: startDate, end_date: endDate })} 
          focusedInput={this.state.focusedInput} 
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
        <button onClick={this.handleSubmit}>Book</button>
      </div>
    )
  }

}

export default withRouter(RentalForm);