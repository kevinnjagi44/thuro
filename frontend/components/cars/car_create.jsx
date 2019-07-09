import React from 'react';
import { withRouter } from 'react-router-dom';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  navigateToIdx() {
    this.props.history.push('/cars/');
  }

  update(field) {
    // debugger
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('car[ownerId]', this.state.ownerId);
    formData.append('car[address]', this.state.address);
    formData.append('car[rate]', this.state.rate);
    formData.append('car[make]', this.state.make);
    formData.append('car[model]', this.state.model);
    formData.append('car[year]', this.state.year);
    formData.append('car[color]', this.state.color);
    formData.append('car[transmission]', this.state.transmission);
    formData.append('car[seats]', this.state.seats);
    formData.append('car[mpg]', this.state.mpg);
    formData.append('car[description]', this.state.description);
    formData.append('car[plate]', this.state.plate);
    formData.append('car[address]', this.state.address);
    formData.append('car[city]', this.state.city);
    formData.append('car[state]', this.state.state);
    formData.append('car[zip]', this.state.zip);
    // add our coordinates
    formData.append('car[lat]', this.state.lat);
    formData.append('car[lng]', this.state.lng);
    // add photos
    
    // formData.append('car[photo]', this.state.photo);

    // debugger

    if (this.state.photos) {
      for(let i = 0; i < this.state.photos.length; i++) {
      formData.append('car[photos][]', this.state.photos[i]);
      }
    }

      // for(let i = 0; i < this.state.photos.length; i++) {
      // formData.append('car[photos][]', this.state.photos[i]);
      // }


    // this.props.createCar(formData).then((car) => this.props.history.push(`/cars/${car.id}`));

    // this.props.createCar(formData).then((data) => this.props.history.push(`/cars/${data.car.id}`));

    // this.props.createCar(formData).then((car) => this.props.history.push(`/cars/${car.id}`));
    
    // this.props.createCar(formData,this.state.id);
    // this.navigateToIdx();

    // this.props.createCar(formData).then(() => this.props.history.push('/cars/'));

    this.props.createCar(formData);
    this.navigateToIdx();

  }

  // handlefile(e) {
  //   this.setState({photoFile: e.currentTarget.files[0]});
  // }

  render() {
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
      
          {/* <h3>Photos</h3> */}

          {/* <input type="file" onChange={this.handleFile.bind(this)} /> */}
          <input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple />

          <br/>

          {/* <label htmlFor="">Lat
            <input type="text" placeholder="Lat" value={this.props.lat} onChange={this.update("lat")} />
          </label>
          <label htmlFor="">Lon
            <input type="text" placeholder="Lon" value={this.props.lng} onChange={this.update("lng")} />
          </label> */}

          <input className="car-create-submit-btn" type="submit" value="Finish"/>

        </form>

      </div>
    )
  }

}

export default withRouter(CarCreate);