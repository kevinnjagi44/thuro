import React from 'react';
import { Link } from 'react-router-dom';
import RentalForm from '../rentals/rental_form';

class CarShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.car;
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  navigateToIdx() {
    this.props.history.push('/cars/');
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCar(this.props.car.id);
    this.navigateToIdx();
  }

  render() {
    let showEditDel;
    
      if (!this.props.car) {
        return null;
      }
      
      if (!this.props.car.photoUrls) {
        return null;
      }

      if (this.props.car.owner_id === this.props.currentUserId) {
        showEditDel = 
        <>
          <Link to={`/cars/${this.props.car.id}/edit`}>
            <button>Edit this car</button>
          </Link>
          <br />
          <button onClick={this.handleDelete}>Delete this car</button>
        </>
      }

    // function randomNumber(min, max) {
    //   return Math.floor(Math.random() * (max - min) + min);
    // }  

    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }  

    const capitalizeName = (fname) => {
      return fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
    }

    const notAllowedCursor = () => {
      cursor: not-allowed;
    }

      return (

      <div className="car-show-container">

      {/* IMAGE BANNER */}

        <div className="car-show-banner">
          {/* <img className="car-show-img-banner" src={this.props.car.photoUrl} /> */}
          <img className="car-show-img-banner" alt="car photo" src={this.props.car.photoUrls[0]} /> 
        </div>

        <br/><br/><br/>

        <div className="car-show-main-section">
      
        {/* LEFT PANEL */}
        
          <div className="car-show-left-container">
            <div className="car-show-grid-container">
              <div className="item-1">
                <div className="car-show-left-sec">
                  The car
                </div>
              </div>
              <div className="item-2">

                <span className="car-show-title">
                  {this.props.car.make} {this.props.car.model}
                </span>&nbsp;
                <span className="car-show-year">
                  {this.props.car.year}
                </span>
                <div className="car-show-star-wrapper">
                  <div className="car-show-star-inner">
                    <div className="car-show-left-full-star"/>
                    <div className="car-show-left-full-star"/>
                    <div className="car-show-left-full-star"/>
                    <div className="car-show-left-full-star"/>
                    <div className="car-show-left-full-star"/>
                  </div>
                </div>

              {/* Standard info like MPG, Gas, Doors, Seats may move here */}
                {/* <div className="car-show-feature-standard-container"> */}
                  {`${this.props.car.transmission}` === 'manual' ? <div title="Manual transmission" className="feature-manual-trans" /> : null}
                  {`${this.props.car.transmission}` === 'automatic' ? <div title="Automatic transmission" className="feature-auto-trans" /> : null}
                  {`${this.props.car.transmission}` === 'none' ? <div title="Electric vehicle" className="feature-electric-trans" /> : null} 

                  <div title="Electric vehicle" className="feature-seats" />  <span className="car-show-features-standard-text">{this.props.car.seats} seats</span>&nbsp;

                  <div title="Electric vehicle" className="feature-doors" /> <span className="car-show-features-standard-text">X doors</span>
                </div>
                
              {/* </div> */}

              <div className="item-3">
                <div className="car-show-left-sec">
                  Hosted by
                </div>
              </div>
              <div className="item-4">
                {/* <div className="car-show-host-wrapper">
                  <div className="car-show-host-avatar">
                    
                  </div> */}
                  <div className="car-show-left-content">
                    {capitalizeName(`${this.props.car.fName}`)}
                  </div>
                  <div className="car-show-left-content-trips">
                    {randomNumber(100,200)} trips - Joined May 2019
                  </div>
                  <div className="car-show-left-content-response">
                      Typically responds in {randomNumber(2,35)} minutes
                  </div>
                {/* </div> */}
              </div>

              <div className="item-5">
                <div className="car-show-left-sec">
                  Description
                </div>
              </div>

              <div className="item-6">
                <div className="car-show-left-content">
                  <p>{this.props.car.description}</p>
                </div>
              </div>

              <div className="item-7">
                <div className="car-show-left-sec">
                  Features
                </div>
              </div>

              <div className="item-8">
                <div className="car-show-left-content">

                  {`${this.props.car.awd}` === 'true' ? <span title="AWD" className="feature-awd"/> : null}
                  {`${this.props.car.audio_input}` === 'true' ? <span title="Audio input" className="feature-audio-input" /> : null }
                  {`${this.props.car.bike_rack}` === 'true' ? <span title="Bike rack" className="feature-bike-rack" /> : null }
                  {`${this.props.car.bluetooth}` === 'true' ? <span title="Bluetooth" className="feature-bluetooth" /> : null }
                  {`${this.props.car.child_seat}` === 'true' ? <span title="Child seat" className="feature-child-seat" /> : null }
                  {`${this.props.car.convertible}` === 'true' ? <span title="Convertible" className="feature-convertible" /> : null }
                  {`${this.props.car.gps}` === 'true' ? <span title="GPS" className="feature-gps" /> : null }
                  {`${this.props.car.heated_seats}` === 'true' ? <span title="Heated seats" className="feature-heated-seats" /> : null }
                  {`${this.props.car.longterm_car}` === 'true' ? <span title="Longterm car" className="feature-longterm-car" /> : null }
                  {`${this.props.car.pet_friendly}` === 'true' ? <span title="Pet friendly" className="feature-pet-friendly" /> : null }
                  {`${this.props.car.ski_rack}` === 'true' ? <span title="Ski rack" className="feature-ski-rack" /> : null }
                  {`${this.props.car.snow_tires_chains}` === 'true' ? <span title="Snow tires/chains" className="feature-snow-tires-chains" /> : null }
                  {`${this.props.car.sunroof}` === 'true' ? <span title="Sunroof" className="feature-sunroof" /> : null }
                  {`${this.props.car.toll_pass}` === 'true' ? <span title="Toll pass" className="feature-toll_pass" /> : null }
                  {`${this.props.car.usb_input}` === 'true' ? <span title="USB input" className="feature-usb-input" /> : null }
                  {`${this.props.car.transmission}` === 'manual' ? <span title="Manual transmission" className="feature-manual-trans" /> : null }
                  {`${this.props.car.transmission}` === 'automatic' ? <span title="Automatic transmission" className="feature-auto-trans" /> : null}
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT PANEL */}

            <div className="car-show-right-container">
              <span className="car-show-usd">
                $
              </span>
              <span className="car-show-price">
                {this.props.car.rate}
              </span>
              &nbsp;
              <span className="car-show-per-day">
                per day
              </span>

              <div className="car-show-distance-container">

                <div className="car-show-rental">
                  
                {/* <RentalForm/> */}

                </div>

                <div>
                  {showEditDel}
                </div>

                <div className="car-show-distance-header">
                  Distance included
                </div>

                <div className="car-show-distance">

                  <div className="car-show-distance-time">
                
                    Day<br/>
                    Week<br/>
                    Month
                    
                  </div>

                  <div className="car-show-distance-mi">
                    200 mi<br/>
                    1000 mi<br/>
                    2250 mi
                  </div>
                </div>
              </div>

              <div className="car-show-insurance-container">
                <div className="car-show-insurance-header">
                  Insurance provided via
                </div>
                <div className="car-show-insurance-co">
                  Freedom Reciprocal
                </div>
              </div>

              <button style={{notAllowedCursor}} className="car-show-add-fav-btn">
                <img className="car-show-add-fav-icon" src="https://github.com/fsiino/torino/blob/master/app/assets/images/add-fav-transp.png?raw=true"/>&nbsp;Add to favorites
              </button>
              <br/>
            </div> 
          
          </div>
          <br/>
        </div>
      )
  }
}

export default CarShow;


