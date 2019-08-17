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

      const { rentals } = this.props;
    
      if (!rentals) {
        return <h1>Loading</h1>
      }

    const rentalItems = rentals.map(rental => {
      return (
      <div key={rental.id}>
        <RentalIndexItem 
          rental={rental} 
          fetchRentals={this.props.fetchRentals} 
          editRental={this.props.editRental} 
          deleteRental={this.props.deleteRental} 
        />
      </div>
      )
    })

    return (
      <div>
        {rentalItems}
      </div>
    )
  }

}

export default RentalIndex;