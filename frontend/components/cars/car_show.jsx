import React from 'react';
import { Link } from 'react-router-dom';

class CarShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.car;
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchCar(id);
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
      // debugger
      // if (this.props.car.owner_id === this.props.currentUserId) {
      // debugger
      if (!this.props.car) {
        return null;
      }
      // debugger
      return (

        <div className="car-show-container">

        {/* IMAGE BANNER */}

          <div className="car-show-banner">
            {/* <img className="car-show-img-banner" src={this.props.car.id.photoUrl} /> */}
            <img className="car-show-img-banner" alt="car photo" src={this.props.car.photoUrls[0]} />
          </div>
          <h1>Hi, this is the show page</h1>
          <br/>
          <Link to={`/cars/${this.props.car.id}/edit`}>
            <button>Edit this car</button>
          </Link>
          <br/>
          <button onClick={this.handleDelete}>Delete this car</button>

          <br/><br/><br/>
          <div className="car-show-main-section">
        
          {/* LEFT PANEL */}
          
            <div className="car-show-left-container">
              <span className="car-show-title">
                {this.props.car.make} {this.props.car.model}
              </span>&nbsp;
              <span className="car-show-year">
                {this.props.car.year}
              </span>
              <div className="star-wrapper">
                <div className="inner">
                  <div className="car-show-left-full-star"/>
                  <div className="car-show-left-full-star"/>
                  <div className="car-show-left-full-star"/>
                  <div className="car-show-left-full-star"/>
                  <div className="car-show-left-full-star"/>
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
                  Placeholder for car rental dropdowns
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
            </div> 
          
        
          </div>
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