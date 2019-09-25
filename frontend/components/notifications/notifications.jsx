import React from 'react';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCars();
  }

  render() {  

    const numRentals = () => {
      return this.props.rentalsForMyCars.length
    };

    return (
      <i>
        {numRentals()}
      </i>
    )
  }
}

export default Notifications;