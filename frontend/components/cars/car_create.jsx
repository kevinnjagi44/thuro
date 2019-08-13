import React from 'react';
import { withRouter } from 'react-router-dom';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    // this.state =  this.props.formFields;
    this.state = {
      // owner_id: state.session.id,
      // ownerId: state.session.id, being passed in from rails
      rate: '',
      make: '',
      model: '',
      year: '',
      color: '',
      transmission: '',
      seats: '',
      doors: '',
      mpg: '',
      description: '',
      plate: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      lat: 0,
      lng: 0,
      awd: false,
      audioInput: false,
      bikeRack: false,
      bluetooth: false,
      childSeat: false,
      convertible: false,
      gps: false,
      heatedSeats: false,
      longtermCar: false,
      petFriendly: false,
      skiRack: false,
      snowTiresChains: false,
      sunroof: false,
      tollPass: false,
      usbInput: false,
      // photo: null
      // photoFile: null
      photos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  navigateToIdx() {
    this.props.history.push('/cars/');
  }

  updateCheckbox(field) {
    return e => {
      this.setState({
        [field]: e.target.checked
      });
    };
  }

  update(field) {
    // debugger
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  // renderErrors() {
  //   return (
  //     <ul className="error-messages">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  //TODO: Make an autocomplete car create for demoing.

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('car[owner_id]', this.state.ownerId);
    formData.append('car[address]', this.state.address);
    formData.append('car[rate]', this.state.rate);
    formData.append('car[make]', this.state.make);
    formData.append('car[model]', this.state.model);
    formData.append('car[year]', this.state.year);
    formData.append('car[color]', this.state.color);
    formData.append('car[transmission]', this.state.transmission);
    formData.append('car[seats]', this.state.seats);
    formData.append('car[doors]', this.state.doors);
    formData.append('car[mpg]', this.state.mpg);
    formData.append('car[description]', this.state.description);
    formData.append('car[plate]', this.state.plate);
    formData.append('car[address]', this.state.address);
    formData.append('car[city]', this.state.city);
    formData.append('car[state]', this.state.state);
    formData.append('car[zip]', this.state.zip);
    // add features to car form from late migration
    formData.append('car[awd]', this.state.awd);
    formData.append('car[audio_input]', this.state.audioInput);
    formData.append('car[bike_rack]', this.state.bikeRack);
    formData.append('car[bluetooth]', this.state.bluetooth);
    formData.append('car[child_seat]', this.state.childSeat);
    formData.append('car[convertible]', this.state.convertible);
    formData.append('car[gps]', this.state.gps);
    formData.append('car[heated_seats]', this.state.heatedSeats);
    formData.append('car[longterm_car]', this.state.longtermCar);
    formData.append('car[pet_friendly]', this.state.petFriendly);
    formData.append('car[ski_rack]', this.state.skiRack);
    formData.append('car[snow_tires_chains]', this.state.snowTiresChains);
    formData.append('car[sunroof]', this.state.sunroof);
    formData.append('car[toll_pass]', this.state.tollPass);
    formData.append('car[usb_input]', this.state.usbInput);
    // add coordinates
    formData.append('car[lat]', this.state.lat);
    formData.append('car[lng]', this.state.lng);
    // add photos
    if (this.state.photos) {
      for(let i = 0; i < this.state.photos.length; i++) {
      formData.append('car[photos][]', this.state.photos[i]);
      }
    }
    // this.props.createCar(formData).then((car) => this.props.history.push(`/cars/${car.id}`));

    // this.props.createCar(formData).then((data) => this.props.history.push(`/cars/${data.car.id}`));

    // this.props.createCar(formData).then((car) => this.props.history.push(`/cars/${car.id}`));
    
    // this.props.createCar(formData,this.state.id);
    // this.navigateToIdx();

    this.props.createCar(formData).then(() => this.props.history.push('/cars/'));

    // this.props.createCar(formData);
    // this.navigateToIdx();

  }


  // handlefile(e) {
  //   this.setState({photoFile: e.currentTarget.files[0]});
  // }

  render() {
    // if (!this.props.formFields) {
    //   return null;
    // }

    // debugger
    return (
      <div className="car-create-container">
        <div className="car-create-banner">
          <h3 className="car-create-banner-text">
            List your car
          </h3>
        </div>

        <form className="car-create-form-container" onSubmit={this.handleSubmit}>

          <h2>Your Car</h2>

          <br/><br/>
          
          {/* {this.renderErrors()} */}
            
          <h3>Where is your car located?</h3>

          <br/>

          <label>Address
            <input type="text" placeholder="Address" value={this.props.address} onChange={this.update("address")}></input>
          </label>
          <label>City
            <input type="text" placeholder="City" value={this.props.city} onChange={this.update("city")}></input>
          </label>
          <label>State
            <input type="text" placeholder="State" value={this.props.state} onChange={this.update("state")}></input>
          </label>
          <label>Zip
            <input type="text" placeholder="Zip" value={this.props.zip} onChange={this.update("zip")}></input>
          </label>

          <br/><br/>

          <h3>Which car do you have?</h3>

          <br/>

          <label htmlFor="">Year
            <input type="text" placeholder="Year" value={this.props.year} onChange={this.update("year")}/>
          </label>
          <label htmlFor="">Make
            <input type="text" placeholder="Make" value={this.props.make} onChange={this.update("make")}/>
          </label>
          <label htmlFor="">Model
            <input type="text" placeholder="Model" value={this.props.model} onChange={this.update("model")}/>
          </label>
          <label htmlFor="">Color
            <input type="text" placeholder="Color" value={this.props.color} onChange={this.update("color")}/>
          </label>
          <label htmlFor="">MPG
            <input type="text" placeholder="MPG" value={this.props.mpg} onChange={this.update("mpg")}/>
          </label>
          <label htmlFor="">Seats
            <input type="text" placeholder="Seats" value={this.props.seats} onChange={this.update("seats")}/>
          </label>
          <label htmlFor="">Doors
            <input type="text" placeholder="Doors" value={this.props.doors} onChange={this.update("doors")}/>
          </label>
          <label htmlFor="">License plate
            <input type="text" placeholder="License plate" value={this.props.plate} onChange={this.update("plate")}/>
          </label>
          <label>Transmission 
            <br/>
            <input type="radio" value="automatic" name="transmission" onChange={this.update("transmission")}/>Automatic&nbsp;
            <input type="radio" value="manual" name="transmission" onChange={this.update("transmission")}/>Manual&nbsp;
            <input type="radio" value="none" name="transmission" onChange={this.update("transmission")} />N/A&nbsp;
          </label>

          <br/><br/><br/>

          <h2>Car Details</h2>

          <br/>

          <label htmlFor="">Daily Rate (USD)
            <input type="text" placeholder="Daily Rate" value={this.props.rate} onChange={this.update("rate")}/>
          </label>

          <label>Description
            <textarea placeholder="Description" value={this.props.description} onChange={this.update("description")}>
              
            </textarea>
          </label>

          <h3>Features</h3>
            <div className="features-wrapper">
              <div>
              <label><input type="checkbox" value={this.state.awd} onChange={this.updateCheckbox("awd")} /> All-wheel-drive</label>
                <br/>
                <label><input type="checkbox" value={this.state.audioInput} onChange={this.updateCheckbox("audioInput")} /> Audio input</label>
                <br />
                <label><input type="checkbox" value={this.state.bikeRack} onChange={this.updateCheckbox("bikeRack")} /> Bike rack</label>
                <br />
              </div>
              <div>              
                <label><input type="checkbox" value={this.state.bluetooth} onChange={this.updateCheckbox("bluetooth")} /> Bluetooth</label>
                <br />
                <label><input type="checkbox" value={this.state.childSeat} onChange={this.updateCheckbox("childSeat")} /> Child seat</label>
                <br />
                <label><input type="checkbox" value={this.state.convertible} onChange={this.updateCheckbox("convertible")} /> Convertible</label>
                <br />
              </div>
              <div>            
                <label><input type="checkbox" value={this.state.gps} onChange={this.updateCheckbox("gps")} /> GPS</label>
                <br />
                <label><input type="checkbox" value={this.state.heatedSeats} onChange={this.updateCheckbox("heatedSeats")} /> Heated seats</label>
                <br/>
                <label><input type="checkbox" value={this.state.longtermCar} onChange={this.updateCheckbox("longtermCar")} /> Longterm car</label>
                <br />
              </div>
              <div>            
                <label><input type="checkbox" value={this.state.petFriendly} onChange={this.updateCheckbox("petFriendly")} /> Pet friendly</label>
                <br />
                <label><input type="checkbox" value={this.state.skiRack} onChange={this.updateCheckbox("skiRack")} /> Ski rack</label>
                <br/>
                <label><input type="checkbox" value={this.state.snowTiresChains} onChange={this.updateCheckbox("snowTiresChains")} /> Snow tires/Chains</label>
                <br />
              </div>
              <div>            
                <label><input type="checkbox" value={this.state.sunroof} onChange={this.updateCheckbox("sunroof")} /> Sunroof</label>
                <br />
                <label><input type="checkbox" value={this.state.tollPass} onChange={this.updateCheckbox("tollPass")} /> Toll pass</label>
                <br />
                <label><input type="checkbox" value={this.state.usbInput} onChange={this.updateCheckbox("usbInput")} /> USB input</label>
                <br />
              </div>
            </div>
          <br/><br/>
      
          {/* <h3>Photos</h3> */}

          {/* <input type="file" onChange={this.handleFile.bind(this)} /> */}
          <input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple />

          <br/>

          <input className="car-create-submit-btn" type="submit" value="Finish"/>

        </form>

      </div>
    )
  }

}

export default withRouter(CarCreate);