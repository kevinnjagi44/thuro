import React from 'react';
import { Link } from 'react-router-dom';
import CarMap from '../car_map/car_map';
import RentalFormContainer from '../rentals/rental_form_container';
import RentalShow from '../rentals/rental_show';
import ReviewIndexContainer from '../reviews/review_index_container';

class CarShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.car;
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
    window.scrollTo(0,0);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCar(this.props.car.id);
    this.props.history.push('/cars/');
  }

  render() {
    
      if (!this.props.car) {
        return null;
      }
      
      if (!this.props.car.photoUrls) {
        return null;
      }
      
      let showEditDel;

      if (this.props.car.owner_id === this.props.currentUserId) {
        showEditDel = 
        <div className="car-show-edit-del">
          <Link to={`/cars/${this.props.car.id}/edit`}>
            <button>Edit this car</button>
          </Link>
          <br />
          <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) {this.handleDelete(e)} } }>Delete this car</button>
        </div>
      }

    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }  

    const capitalizeName = (fname) => {
      return fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
    }

    const notAllowedCursor = () => {  
      cursor: not-allowed;
    }

    const ShowTransmission = () => {
      let trans = this.props.car.transmission;
      let result;
      if (this.props.car.transmission === 'manual') {
        result = 
        <> 
          <div title="Manual transmission" className="feature-manual-trans" /> 
          <span className="car-show-features-standard-text">Manual transmission</span>
        </> 
      } else if (this.props.car.transmission === 'automatic') {
        result = 
        <> 
          <div title="Automatic transmission" className="feature-auto-trans" /> 
          <span className="car-show-features-standard-text">Automatic transmission</span> 
        </>
      } else if (this.props.car.transmission === 'none') {
        result = 
        <> 
          <div title="Electric vehicle" className="electric-trans" /> 
          <span className="car-show-features-standard-text">&nbsp;Electric vehicle</span> 
        </>
      }
      return result;
    }

    const ShowRentalForm = () => {
      if (this.props.currentUserId) {
        return <RentalFormContainer/>
      } else {
        return (
        <div className="rental-form-login">
          <button onClick={() => {this.props.openModal('login')}}>Please Login to Rent!</button>
        </div>
        )
      }
    }
    
      return (

      <div className="car-show-container">

      {/* IMAGE BANNER */}

        <div className="car-show-banner">
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
                    <span className="car-show-top-trips">
                      ∙ {randomNumber(100, 200)} trips
                    </span>
                  </div>
                </div>

              <div className="car-show-std-feat-container">
                <div className="car-show-std-feat-grid">
                  <div className="item-1">
                    <ShowTransmission/>
                  </div>

                  <div className="item-2">
                    <div className="feature-doors"/>
                    <span className="car-show-features-standard-text">{this.props.car.doors} doors</span>
                  </div>

                  <div className="item-3">
                    <div className="feature-seats"/>
                    <span className="car-show-features-standard-text">{this.props.car.seats} seats</span>
                  </div>

                  <div className="item-4">
                    <div className="feature-mpg"/>
                    <span className="car-show-features-standard-text">{this.props.car.mpg} MPG</span>
                  </div>

                </div>

              </div>
                
              </div>

              <div className="item-3">
                <div className="car-show-left-sec">
                  Hosted by
                </div>
              </div>
              <div className="item-4">
                <div className="car-show-host-wrapper">
                  <div className="car-show-host-avatar">
                  </div> 
                  <div className="car-show-right-of-avatar">
                    <div className="car-show-left-content">
                      {capitalizeName(this.props.car.fName)}
                    </div>
                    <br/>
                    <div className="car-show-left-content-trips">
                      {randomNumber(100,200)} trips - Joined May 2019
                    </div>
                    <br />
                    <div className="car-show-left-content-response">
                        Typically responds in {randomNumber(2,35)} minutes
                    </div>
                  </div>
                </div>

              </div>

              <div className="item-5">
                <div className="car-show-left-sec">
                  Description
                </div>
              </div>

              <div className="item-6">
                <div className="car-show-left-content">
                  {this.props.car.description}
                </div>
              </div>

              <div className="item-7">
                <div className="car-show-left-sec">
                  Features
                </div>
              </div>

              <div className="item-8">
                <div className="car-show-left-content">

                  {`${this.props.car.awd}` === 'true' ? <><span title="AWD" className="feature-awd" /><span>All-wheel-drive</span><br/></> : null}
                  {`${this.props.car.audio_input}` === 'true' ? <><span title="Audio input" className="feature-audio-input" /><span>Audio input</span><br /></> : null}
                  {`${this.props.car.bike_rack}` === 'true' ? <><span title="Bike rack" className="feature-bike-rack" /><span>Bike rack</span><br /></> : null}
                  {`${this.props.car.bluetooth}` === 'true' ? <><span title="Bluetooth" className="feature-bluetooth" /><span>Bluetooth</span><br /></> : null }
                  {`${this.props.car.child_seat}` === 'true' ? <><span title="Child seat" className="feature-child-seat" /><span>Child seat</span><br /></> : null}
                  {`${this.props.car.convertible}` === 'true' ? <><span title="Convertible" className="feature-convertible" /><span>Convertible</span><br /></> : null}
                  {`${this.props.car.gps}` === 'true' ? <><span title="GPS" className="feature-gps" /><span>GPS</span><br /></> : null}
                  {`${this.props.car.heated_seats}` === 'true' ? <><span title="Heated seats" className="feature-heated-seats" /><span>Heated seats</span><br/></> : null}
                  {`${this.props.car.longterm_car}` === 'true' ? <><span title="Longterm car" className="feature-longterm-car" /><span>Longterm car</span><br/></> : null}
                  {`${this.props.car.pet_friendly}` === 'true' ? <><span title="Pet friendly" className="feature-pet-friendly" /><span>Pet friendly</span><br/></> : null }
                  {`${this.props.car.ski_rack}` === 'true' ? <><span title="Ski rack" className="feature-ski-rack" /><span>Ski rack</span><br/></> : null}
                  {`${this.props.car.snow_tires_chains}` === 'true' ? <><span title="Snow tires/chains" className="feature-snow-tires-chains" /><span>Snow tires/chains</span><br/></> : null}
                  {`${this.props.car.sunroof}` === 'true' ? <><span title="Sunroof" className="feature-sunroof" /><span>Sunroof</span><br/></> : null}
                  {`${this.props.car.toll_pass}` === 'true' ? <><span title="Toll pass" className="feature-toll-pass" /><span>Toll pass</span><br/></> : null}
                  {`${this.props.car.usb_input}` === 'true' ? <><span title="USB input" className="feature-usb-input" /><span>USB input</span><br/></> : null}

                </div>
              </div>

              <div className="item-9">
                <div className="car-show-left-sec">
                  Reviews
                </div>
              </div>

              <div className="item-10">
                <div className="car-show-left-content">
                  <ReviewIndexContainer/>
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
                  
                <ShowRentalForm/>

                </div>

                {showEditDel}

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

            {/* <div className="car-show-zoomed-map">
                <CarMap cars={this.props.cars} />
            </div> */}

            </div> 
          
          </div>
          <br/>
        </div>
      )
  }
}

export default CarShow;


