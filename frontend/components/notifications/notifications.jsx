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
// debugger
    const NumRentals = () => {
      let len = this.props.myPendingRentals.length;
      return len ? len : null;
    };

    if (this.props.myPendingRentals.length) {
      notify('this is a notification');
    }

    return (
      <>
        {/* <i onClick={() => notify('this is a notification')}> */}
          <Toast myPendingRentals={this.props.myPendingRentals}/>
          {/* <NumRentals/> */}
        {/* </i> */}
      </>
    )
  }
}

export default Notifications;