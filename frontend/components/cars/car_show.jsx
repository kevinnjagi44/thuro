import React from 'react';
import { Link } from 'react-router-dom';

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
      
      // if (this.props.car.owner_id === this.props.currentUserId) {
        if (!this.props.car) {
          return null;
        }
        
        if (!this.props.car.photoUrls) {
          return null;
        }

        return (

        <div className="car-show-container">

        {/* IMAGE BANNER */}

          <div className="car-show-banner">
            {/* {/* <img className="car-show-img-banner" src={this.props.car.id.photoUrl} /> */}
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
                </div>

                <div className="item-3">
                  <div className="car-show-left-sec">
                    Hosted by
                  </div>
                </div>
                <div className="item-4">
                  <div className="car-show-left-content">
                    {/* {this.props.car.ownerId} */}
                  </div>
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
                    {/* <div className="car-features-wrapper"> */}

                        {`${this.props.car.awd}` === 'true' ? <span title="AWD" className="feature-awd"/> : null}
                        {`${this.props.car.audio_input}` === 'true' ? <span title="Audio input" className="feature-audioInput" /> : null }
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
                      {`${this.props.car.tollpass}` === 'true' ? <span title="Tollpass" className="feature-tollpass" /> : null }
                      {`${this.props.car.usbinput}` === 'true' ? <span title="USB input" className="feature-usbinput" /> : null }
                    {/* </div> */}
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
                  
                  {/* Rentals will go here. */}

                </div>

                <div>
                  
                  <Link to={`/cars/${this.props.car.id}/edit`}>
                    <button>Edit this car</button>
                  </Link>
                  <br />
                  <button onClick={this.handleDelete}>Delete this car</button>
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

              <button className="car-show-add-fav-btn">
                <img className="car-show-add-fav-icon" src="https://github.com/fsiino/torino/blob/master/app/assets/images/add-fav-transp.png?raw=true"/>&nbsp;Add to favorites
              </button>
              <br/>
            </div> 
          
          </div>
          <br/>
        </div>
      )



      


//     } else {
//       return (
//         <div className="car-show-container">
//           <h1>Test test test</h1>
//         </div> 
//       )
//     }
  }
}

export default CarShow;


// May need to make the below its own component (not a class)


// class CarShow extends React.Component {
//   constructor(props) {
//     super(props);

//     const showEdit = () => {
//       let editOrNot;
//       if (this.props.car.ownerId === this.props.currentUser) {
//         return (
//           <div className="car-show-container">
//             <h1>Hi, this is the show page</h1>
//             <br />
//             <Link to={`/cars/${this.props.car.id}/edit`}>
//               <button>Edit this car</button>
//             </Link>
//           </div>
//         )
//       } else {
//         return (
//           <div className="car-show-container">
//             <h1>Test test test</h1>
//           </div>
//         )
//       }
//     }
//   }

//   render(showEdit) {
//     return (
//       <div>
//         {editOrNot}
//       </div>
//     )
//   }
// }