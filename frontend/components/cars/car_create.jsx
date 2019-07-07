import React from 'react';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.formFields;
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="car-create-container">
        Car Create page
      </div>
    )
  }

}

export default CarCreate;