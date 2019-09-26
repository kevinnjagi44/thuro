import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';
import NumRentals from './notifications';
import { editRental } from '../../actions/rental_actions';
import { connect } from 'react-redux';

const Container = styled.div`
  background-color: #444;
  color: white;
  padding: 8px;
  position: absolute;
  top: ${props => props.top}px;
  right: 60px;
  z-index: 999;
  transition: top 0.5s ease;
  font-family: BasisGrotesque,Avenir,Helvetica Neue,Helvetica,sans-serif;
  cursor: default;

  > .toast-x {
    position: absolute;
    top: -33px;
    right: 3px;
    cursor: pointer;
    font-size: 18px;

  }
`;

const emitter = new ee();

export const notify = (msg) => {
  emitter.emit('notification', msg);
}

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: -100,
      msg: ''
    };
    this.showNotification = this.showNotification.bind(this);
    // this.onShow = this.onShow.bind(this);
    this.closeToast = this.closeToast.bind(this);
    this.clearToast = this.clearToast.bind(this);
    this.timeout = null;
    emitter.on('notification', (msg) => {
      this.showNotification(msg);
    });
  }

  // onShow (msg) {
  //   if (this.timeout) {
  //     clearTimeout(this.timeout);
  //     this.setState({
  //       top: -100,
  //     }, () => {
  //       this.timeout = setTimeout(() => {
  //         this.showNotification(msg);
  //       }, 500);
  //     });
  //   } else {
  //     this.showNotification(msg);
  //   }
  // }

  showNotification (msg) {
    this.setState({
      top: 59
    });
  }

  closeToast () {
    this.setState({
      top: -100
    });
  }

  clearToast () {
    for (let i = 0; i < this.props.myPendingRentals.length; i++) {
      let rental = this.props.myPendingRentals[i];
      let rentalId = rental.id;

      this.props.editRental({
        start_date: rental.start_date,
        end_date: rental.end_date,
        renter_id: rental.renter_id,
        car_id: rental.car_id,
        status: 'approved'
      }, rentalId).then(this.closeToast);
    }
  }

  // showNotification (msg) {
  //   this.setState({
  //     top: 59
  //   }, () => {
  //     this.timeout = setTimeout(() => {
  //       this.setState({
  //         top: -100
  //       });
  //     }, 3000);
  //   });
  // }
  

  render() {

    return (
      <Container top={this.state.top}>
        <div onClick={this.clearToast}>
        {this.props.myPendingRentals.length === 1 ? `You have ${this.props.myPendingRentals.length} new rental request!` : `You have ${this.props.myPendingRentals.length} new rental requests!`}. Click to approve.
        </div>
        <div className="toast-x" onClick={this.closeToast}>X</div>
      </Container> 
    )
  }
}

const mDTP = dispatch => {
  return {
    editRental: (rental, rentalId) => dispatch(editRental(rental, rentalId))
  }
}

export default connect(
  null,
  mDTP
)(Toast)