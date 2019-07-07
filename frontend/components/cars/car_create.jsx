import React from 'react';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.formFields;
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="car-create-container">
        <div className="car-create-banner">
          <h3 className="car-create-banner-text">
            List your car
          </h3>
        </div>

        <form className="car-create-form-container">

        <h2>Your Car</h2>

        <br/><br/>
          
        <h3>Where is your car located?</h3>

        <label>Address
          <input type="text" placeholder="Address"></input>
        </label>
        <label>City
          <input type="text" placeholder="City"></input>
        </label>
        <label>State
          <input type="text" placeholder="State"></input>
        </label>
        <label>Zip
          <input type="text" placeholder="Zip"></input>
        </label>

        <br/><br/>

        <h3>Which car do you have?</h3>

        <label htmlFor="">Year
          <input type="text" placeholder="Year"/>
        </label>
        <label htmlFor="">Make
          <input type="text" placeholder="Make"/>
        </label>
        <label htmlFor="">Model
          <input type="text" placeholder="Model"/>
        </label>
        <label htmlFor="">Color
          <input type="text" placeholder="Color"/>
        </label>
        <label htmlFor="">MPG
          <input type="text" placeholder="MPG"/>
        </label>
        <label htmlFor="">Seats
          <input type="text" placeholder="Seats"/>
        </label>
        <label>Transmission
          <input type="radio" value="true" name="trans"/>Automatic
          <input type="radio" value="false" name="trans"/>Manual
          <input type="radio" value="false" name="trans"/>N/A
        </label>

        <br/><br/>

        <h2>Car Details</h2>

        <br/><br/>

        <label htmlFor="">Daily Rate
          $<input type="text" placeholder="Daily Rate" />
        </label>

        <label>Description
          <textarea>
            
          </textarea>
        </label>

        <h3>Features</h3>

        <br/><br/>
    
        <h3>Car Photos</h3>

        </form>



      </div>
    )
  }

}

export default CarCreate;