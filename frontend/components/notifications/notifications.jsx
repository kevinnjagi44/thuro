import React from 'react';
import Toast, { notify } from './toast';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPendingRentals: props.myPendingRentals
    };
  }

  componentDidMount() {
    this.props.fetchCars();
    this.setState({
      myPendingRentals: this.props.myPendingRentals
    });
  }


  render() {
    if (this.props.myPendingRentals.length !== 0) {
      notify('this is a notification');
    }

    return (
      <>
        <Toast myPendingRentals={this.props.myPendingRentals} />
      </>
    )
  }
}

export default Notifications;