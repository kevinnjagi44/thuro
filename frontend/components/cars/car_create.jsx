import React from 'react';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bench[description]', this.state.description);
    formData.append('bench[seating]', this.state.seating);
    // add our coordinates
    formData.append('bench[lat]', this.coords['lat']);
    formData.append('bench[lng]', this.coords['lng']);

    this.props.createCar(formData);
    this.navigateToSearch();
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

          <br/>

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

          <br/>

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
            <br/>
            <input type="radio" value="automatic" name="trans"/>Automatic&nbsp;
            <input type="radio" value="manual" name="trans" />Manual&nbsp;
            <input type="radio" value="none" name="trans" />N/A&nbsp;
          </label>

          <br/><br/><br/>

          <h2>Car Details</h2>

          <br/>

          <label htmlFor="">Daily Rate (USD)
            <input type="text" placeholder="Daily Rate" />
          </label>

          <label>Description
            <textarea>
              
            </textarea>
          </label>

          <h3>Features</h3>
            <div className="features-wrapper">
              <div>
                <label><input type="checkbox" value="awd" /> All-wheel-drive</label><br/>
                <label><input type="checkbox" value="audio_input" /> Audio input</label><br />
                <label><input type="checkbox" value="bike_rack" /> Bike rack</label><br />
              </div>
              <div>              
                <label><input type="checkbox" value="bluetooth" /> Bluetooth</label><br />
                <label><input type="checkbox" value="child_seat" /> Child seat</label><br />
                <label><input type="checkbox" value="convertible" /> Convertible</label><br />
              </div>
              <div>            
                <label><input type="checkbox" value="gps" /> GPS</label><br />
                <label><input type="checkbox" value="heated_seats"/> Heated seats</label><br/>
                <label><input type="checkbox" value="longterm_car" /> Longterm car</label><br />
              </div>
              <div>            
                <label><input type="checkbox" value="pet_friendly" /> Pet friendly</label><br />
                <label><input type="checkbox" value="ski_rack" /> Ski rack</label><br/>
                <label><input type="checkbox" value="snow_tires_chains" /> Snow tires/Chains</label><br />
              </div>
              <div>            
                <label><input type="checkbox" value="sunroof" /> Sunroof</label><br />
                <label><input type="checkbox" value="tol_pass" /> Toll pass</label><br />
                <label><input type="checkbox" value="usb_input" /> USB input</label><br />
              </div>
            </div>
          <br/><br/>
      
          <h3>Photos</h3>

          <input className="car-create-submit-btn" type="submit" value="Finish"/>

        </form>

      </div>
    )
  }

}

export default CarCreate;