import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class RentalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carId: this.props.carId,
      startDate: null,
      endDate: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const newRental = {
      start_date: this.state.startDate,
      end_date: this.state.endDate
    };
    
    // const formData = new FormData();
    // formData.append('rental[start_date]', this.state.startDate);
    // formData.append('rental[end_date]', this.state.endDate);

    // this.props.createRental(formData).then(() => this.props.history.push(`/rentals/`));
    this.props.createRental(newRental).then(() => this.setState({
      startDate: null,
      endDate: null,
      focusedInput: null,
      rental: newRental
    })).then(alert("Booking Requested!"));
  }

  handleStartDate(date) {
    this.setState({ startDate: date })
  }

  handleEndDate(date) {
    this.setState({ endDate: date })
  }

  render() {
    // debugger
    return (
      <div className="rental-form-container">
        {/* <form onSubmit={this.handleSubmit}> */}
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="startDate" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="endDate" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([startDate, endDate]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
          {/* <input type="submit" value="Book!" /> */}
          <button onClick={this.handleSubmit}>Book</button>
        {/* </form> */}
      </div>
    )
  }



}

export default withRouter(RentalForm);