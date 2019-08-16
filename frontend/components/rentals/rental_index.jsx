//TODO: Use this component for the user show page to track rentals.

import React from 'react';
import RentalIndexItem from './rental_index_item';

class RentalIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const rentals = this.props;

    if (!rentals) return <h1>'Loading'</h1>;

    return (
      <div>
        { this.props.rentals.map(rental => {
          rental.start_date
        }) 
      
      }
    </div>
    )
  }

}

export default RentalIndex;