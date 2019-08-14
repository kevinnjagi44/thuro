import React from 'react';
import { Redirect } from 'react-router-dom';

class CarUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.car;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.carId = this.props.match.params.id;
    
  }

  componentDidMount() {
    this.props.fetchCar(this.carId);
    window.scrollTo(0, 0);
  }

  navigateToShow() {
    this.props.history.push(`/cars/${this.carId}`);
    window.scrollTo(0, 0);
    // this.props.history.push('/cars/');
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  updateRadio(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.checked
      });
    };
  }

  updateCheckbox(field) {
    return e => {
      this.setState({
        [field]: e.target.checked
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    // for (let i = 0; i < this.state.photos.length; i++) {
    //   formData.append('car[photos][]', this.state.photos[i]);
    // }

    if (this.state.photos) {
      for (let i = 0; i < this.state.photos.length; i++) {
        formData.append('car[photos][]', this.state.photos[i]);
      }
    }

    this.props.editCar(this.state, this.state.id);
    this.navigateToShow();

  }

  render() {
    if (!this.state || this.props.currentUserId !== this.props.car.owner_id) {
      
      return (
        <Redirect to="/cars" />
        )
      }

      return (
        <div className="car-create-container">
        <div className="car-create-banner">
          <h3 className="car-create-banner-text">
            Update your car
          </h3>
        </div>

        <form className="car-create-form-container" onSubmit={this.handleSubmit}>

          <h2>Your Car</h2>

          <br /><br />

          <h3>Where is your car located?</h3>

          <br />

          <label>Address
            <input type="text" placeholder="Address" value={this.state.address} onChange={this.update("address")}></input>
          </label>
          <label>City
            <input type="text" placeholder="City" value={this.state.city} onChange={this.update("city")}></input>
          </label>
          <label>State
            <input type="text" placeholder="State" value={this.state.state} onChange={this.update("state")}></input>
          </label>
          <label>Zip
            <input type="text" placeholder="Zip" value={this.state.zip} onChange={this.update("zip")}></input>
          </label>

          <br /><br />

          <h3>Which car do you have?</h3>

          <br />

          <label htmlFor="">Year
            <input type="text" placeholder="Year" value={this.state.year} onChange={this.update("year")} />
          </label>
          <label htmlFor="">Make
            <input type="text" placeholder="Make" value={this.state.make} onChange={this.update("make")} />
          </label>
          <label htmlFor="">Model
            <input type="text" placeholder="Model" value={this.state.model} onChange={this.update("model")} />
          </label>
          <label htmlFor="">Color
            <input type="text" placeholder="Color" value={this.state.color} onChange={this.update("color")} />
          </label>
          <label htmlFor="">MPG
            <input type="text" placeholder="MPG" value={this.state.mpg} onChange={this.update("mpg")} />
          </label>
          <label htmlFor="">Seats
            <input type="text" placeholder="Seats" value={this.state.seats} onChange={this.update("seats")} />
          </label>
          <label htmlFor="">Doors
            <input type="text" placeholder="Doors" value={this.state.doors} onChange={this.update("doors")} />
          </label>
          <label htmlFor="">License plate
            <input type="text" placeholder="License plate" value={this.state.plate} onChange={this.update("plate")} />
          </label>
          <label>Transmission
            <br />
            <input type="radio" name="transmission" value="automatic"  onChange={this.update("transmission")} />Automatic&nbsp;
            <input type="radio" name="transmission" value="manual" onChange={this.update("transmission")} />Manual&nbsp;
            <input type="radio" name="transmission" value="none" onChange={this.update("transmission")} />N/A&nbsp;
          </label>
          <br /><br /><br />

          <h2>Car Details</h2>

          <br />

          <label htmlFor="">Daily Rate (USD)
            <input type="text" placeholder="Daily Rate" value={this.state.rate} onChange={this.update("rate")} />
          </label>

          <label>Description
            <textarea placeholder="Description" value={this.state.description} onChange={this.update("description")}>

            </textarea>
          </label>

          <h3>Features</h3>
            <div className="features-wrapper">
              <div>
                <label><input type="checkbox" checked={this.state.awd} onChange={this.updateCheckbox('awd')} /> All-wheel-drive</label>
                <br/>
                <label><input type="checkbox" checked={this.state.audio_input} onChange={this.updateCheckbox('audio_input')} /> Audio input</label>
                <br />
                <label><input type="checkbox" checked={this.state.bike_rack} onChange={this.updateCheckbox('bike_rack')} /> Bike rack</label>
                <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.bluetooth} onChange={this.updateCheckbox('bluetooth')} /> Bluetooth</label>
                <br />
                <label><input type="checkbox" checked={this.state.child_seat} onChange={this.updateCheckbox('child_seat')} /> Child seat</label>
                <br />
                <label><input type="checkbox" checked={this.state.convertible} onChange={this.updateCheckbox('convertible')} /> Convertible</label>
                <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.gps} onChange={this.updateCheckbox('gps')} /> GPS</label>
                  <br />
                <label><input type="checkbox" checked={this.state.heated_seats} onChange={this.updateCheckbox('heated_seats')} /> Heated seats</label>
                  <br/>
                <label><input type="checkbox" checked={this.state.longterm_car} onChange={this.updateCheckbox('longterm_car')} /> Longterm car</label>
                  <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.pet_friendly} onChange={this.updateCheckbox('pet_friendly')} /> Pet friendly</label>
                  <br />
                <label><input type="checkbox" checked={this.state.ski_rack} onChange={this.updateCheckbox('ski_rack')} /> Ski rack</label>
                  <br/>
                <label><input type="checkbox" checked={this.state.snow_tires_chains} onChange={this.updateCheckbox('snow_tires_chains')} /> Snow tires/Chains</label>
                  <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.sunroof} onChange={this.updateCheckbox('sunroof')} /> Sunroof</label>
                  <br />
                <label><input type="checkbox" checked={this.state.toll_pass} onChange={this.updateCheckbox('toll_pass')} /> Toll pass</label>
                  <br />
                <label><input type="checkbox" checked={this.state.usb_input} onChange={this.updateCheckbox('usb_input')} /> USB input</label>
                  <br />
              </div>
            </div>
          <br/><br/>

          {/* <h3>Features</h3>
            <div className="features-wrapper">
              <div>
                <label><input type="checkbox" checked={this.state.awd} onChange={this.updateCheckbox("awd")} /> All-wheel-drive</label>
                <br/>
                <label><input type="checkbox" checked={this.state.audioInput} onChange={this.updateCheckbox("audioInput")} /> Audio input</label>
                <br />
                <label><input type="checkbox" checked={this.state.bikeRack} onChange={this.updateCheckbox("bikeRack")} /> Bike rack</label>
                <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.bluetooth} onChange={this.updateCheckbox("bluetooth")} /> Bluetooth</label>
                <br />
                <label><input type="checkbox" checked={this.state.childSeat} onChange={this.updateCheckbox("childSeat")} /> Child seat</label>
                <br />
                <label><input type="checkbox" checked={this.state.convertible} onChange={this.updateCheckbox("convertible")} /> Convertible</label>
                <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.gps} onChange={this.updateCheckbox("gps")} /> GPS</label>
                  <br />
                <label>
                  <input type="checkbox" checked={this.state.heatedSeats} onChange={this.updateCheckbox("heatedSeats")} /> Heated seats
                  </label>
                  <br/>
                <label><input type="checkbox" checked={this.state.longtermCar} onChange={this.updateCheckbox("longtermCar")} /> Longterm car</label>
                  <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.petFriendly} onChange={this.updateCheckbox("petFriendly")} /> Pet friendly</label>
                  <br />
                <label><input type="checkbox" checked={this.state.skiRack} onChange={this.updateCheckbox("skiRack")} /> Ski rack</label>
                  <br/>
                <label><input type="checkbox" checked={this.state.snowTiresChains} onChange={this.updateCheckbox("snowTiresChains")} /> Snow tires/Chains</label>
                  <br />
              </div>
              <div>
                <label><input type="checkbox" checked={this.state.sunroof} onChange={this.updateCheckbox("sunroof")} /> Sunroof</label>
                  <br />
                <label><input type="checkbox" checked={this.state.tollPass} onChange={this.updateCheckbox("tollPass")} /> Toll pass</label>
                  <br />
                <label><input type="checkbox" checked={this.state.usbInput} onChange={this.updateCheckbox("usbInput")} /> USB input</label>
                  <br />
              </div>
            </div>
          <br/><br/> */}
{/* 
          <h3>Photos</h3> */}

          {/* <input type="file" onChange={this.handleFile.bind(this)} /> */}

          {/* <input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple /> */}

          //TODO: Get image upload to work on update page.

          <br />

          {/* <label htmlFor="">Lat
            <input type="text" placeholder="Lat" value={this.state.lat} onChange={this.update("lat")} />
          </label>
          <label htmlFor="">Lon
            <input type="text" placeholder="Lon" value={this.state.lng} onChange={this.update("lng")} />
          </label> */}

          <input className="car-create-submit-btn" type="submit" value="Finish" />

        </form>

      </div>
    )
  }

}

export default CarUpdate;