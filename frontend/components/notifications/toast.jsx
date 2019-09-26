import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';
import NumRentals from './notifications';

const Container = styled.div`
  background-color: #444;
  color: white;
  padding: 16px;
  position: absolute;
  top: ${props => props.top}px;
  right: 0px;
  z-index: 999;
  transition: top 0.5s ease;
  font-family: BasisGrotesque,Avenir,Helvetica Neue,Helvetica,sans-serif;
`;

const emitter = new ee();

export const notify = (msg) => {
  emitter.emit('notification', msg);
}

export default class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: -100,
      msg: ''
    };
    this.showNotification = this.showNotification.bind(this);
    this.onShow = this.onShow.bind(this);
    this.timeout = null;
    emitter.on('notification', (msg) => {
      this.onShow(msg);
    });
  }

  onShow (msg) {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState({
        top: -100,
      }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification(msg);
        }, 500);
      });
    } else {
      this.showNotification(msg);
    }
  }

  showNotification (msg) {
    this.setState({
      top: 59
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState({
          top: -100
        });
      }, 3000);
    });
  }
  

  render() {
    
    return (
      <Container top={this.state.top}>
        {this.props.myPendingRentals === 1 ? `You have ${this.props.myPendingRentals} new rental request!` : `You have ${this.props.myPendingRentals} new rental requests!`}
      </Container> 
    )
  }
}