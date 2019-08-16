//TODO: Use this component for the user show page to track rentals.

import React from 'react';
import RentalIndexItem from './rental_index_item';

class RentalIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRentals();
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="rental-index-container">
      <h1>Your Rentals</h1>
        { this.props.rentals.map((rental, i )=> 
        <div key={i} className="rental-index-tile">
          {rental.start_date}
        </div>
        ) 
      
      }
    </div>
    )
  }

}

export default RentalIndex;