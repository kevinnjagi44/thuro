import React from 'react';
import RentalIndexItem from './rental_index_item';
import { Link, Redirect } from 'react-router-dom';

class RentalIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRentals();
    window.scrollTo(0, 0);
  }

  render() {

    if (!this.props.currentUserId) {
      return (
      <Redirect to="/" />
      )
    }
    
    const { rentals } = this.props;
  
    if (!rentals) {
      return <h1>Loading</h1>
    }
      
    const rentalItems = rentals.map(rental => {
      return (
      <div className="rental-index-tile" key={rental.id}>
        <RentalIndexItem 
          rental={rental} 
          fetchRentals={this.props.fetchRentals} 
          editRental={this.props.editRental} 
          deleteRental={this.props.deleteRental} 
        />
      </div>
      )
    })

    const DisplayRentals = () => {
      if (!rentals.length) {
        return (
          <div className="rental-index-no-rentals">
            <h1>You currently have no rentals.</h1>
            <br/>
            <h2><Link to="/cars">Check out our cars</Link> and book your next joy ride!</h2>
            
          </div>
        )
      } else {
        return (
          rentalItems
        )
      }
    }

    return (
      <div className="rental-index-container">
        <h2>Your Rentals</h2>
        <DisplayRentals/>
      </div>
    )
  }
}

// TODO: Fix logout modal placement and protected routes.

export default RentalIndex;