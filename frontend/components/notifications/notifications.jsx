import React from 'react';
import Toast, { notify } from './toast';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCars();
  }

  render() {  

    const NumRentals = () => {
      let len = this.props.myPendingRentals.length;
      return len ? len : null;
    };

    return (
      <>
        <i onClick={() => notify('this is a notification')}>
          <Toast myPendingRentals={this.props.myPendingRentals.length}/>
          <NumRentals/>
        </i>
      </>
    )
  }
}

export default Notifications;