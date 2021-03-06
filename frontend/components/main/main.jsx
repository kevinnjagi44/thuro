import React from 'react';
import {Link} from 'react-router-dom';
import 'react-dates/initialize';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MainTimeDropdown from './main_time_dropdown';
import moment from 'moment';

class Main extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       search_start_date: null,
       search_end_date: null
     };
   }

  render () {

    // const getDate = () => {
    //   const date = new Date();
    //   let year = date.getFullYear();
    //   let month = date.getMonth() + 1;
    //   let day = date.getDate();
    //   month < 10 ? `0${month}` : month;
    //   day < 10 ? `0${day}` : day;
    //   return `${year}-${month}-${day}`
    // };


    return (

      
      <div> 

      {/* Main */}

        <div className="main-container">
          <div className="spacer"/>
            <h2 className="banner">Way better than a rental car</h2>
            <h2 className="caption">Book unforgettable cars from local hosts around the world</h2>

      {/* Search */}

            <div className="search-container">
              <form className="search-form">

                <div className="search-where">

                  <label>Where</label>
                  <input type="text" placeholder="City, airport, address, or hotel" defaultValue={`San Francisco, CA`}/>

                </div>

                <div className="search-from">
      
                  <label>From</label>
                  <div className="main-datetime-wrapper">
                  <input className="main-date" type="date" defaultValue={moment().format('YYYY-MM-DD')}/>
                    {/* <SingleDatePicker
                      date={this.state.search_start_date} // momentPropTypes.momentObj or null
                      onDateChange={date => this.setState({ search_start_date: date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                      id="1" // PropTypes.string.isRequired,
                    /> */}

                    <MainTimeDropdown/>
                  </div>
  
                </div>

                <div className="search-until">

                  <label>Until</label>
                  <div className="main-datetime-wrapper">
                  <input className="main-date" type="date" defaultValue={moment().add(7, "days").format('YYYY-MM-DD')}/>  
                    {/* <SingleDatePicker
                      date={this.state.search_start_date} // momentPropTypes.momentObj or null
                      onDateChange={date => this.setState({ search_start_date: date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                      id="1" // PropTypes.string.isRequired,
                    /> */}

                    <MainTimeDropdown />
                  </div>

                </div>

              <Link to={"/cars"}>
                <button className="search-button"/>
              </Link>
              
              </form>
            </div>

            <div className="main-social">
            <a href="https://www.frankiesiino.com" target="_blank"><img className="main-social-icon" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/web-icon.png?raw=true"/>Portfolio</a>
              <br/>
            <a href="https://www.github.com/fsiino" target="_blank"><img className="main-social-icon" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/github-icon.png?raw=true"/>GitHub</a>
              <br/>
            <a href="https://www.linkedin.com/in/fsiino" target="_blank"><img className="main-social-icon" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/linkedin-icon.png?raw=true"/>LinkedIn</a>
            </div>
          </div>

      {/* Middle */} 

        <div className="mid-container">

          <div className="mid-insurance-container">
            <div className="mid-insurance">
              <div className="mid-ins-header">
              Insurance Provider
              </div>
              <div>
                <img className="mid-ins-img" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/insurance-fr.png?raw=true" alt="Freedom Reciprocal" />
              </div>
            </div>
          </div>

          <h3 className="mid-h2">Skip the rental counter</h3>
          <br/>
          <h2 className="mid-h3">Discover the world’s largest car sharing marketplace</h2>
        </div>
        
          <br/>
          <br/>
          <div className="grid-container">

            <div className="item-1">
              <img alt="car-photos" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/ic-car-photos.png?raw=true"/>
            </div>

            <div className="item-2">
              <h3 className="mid-header">Endless options</h3>
              Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it.</div>

            <div className="thumbs-up">
              <img alt="car-photos" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/ic-thumbs-up.png?raw=true" />
            </div>              

            <div className="item-4">
              <h3 className="mid-header">Free cancellation</h3>
              Cancel for free up to 24 hours before your trip starts. Because life happens and it helps to be flexible when it does.</div>

            <div className="item-5">
              <img alt="support" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/ic-support.png?raw=true" />
            </div>            

            <div className="item-6">
              <h3 className="mid-header">24/7 customer support</h3>
              Rest easy knowing that everyone in the Thuro community is screened, and 24/7 customer support and roadside assistance are just a click away.</div>

            <div className="item-7">
              <img alt="shield" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/ic-shield-check.png?raw=true" />
            </div>            

            <div className="item-8">
              <h3 className="mid-header">Insurance options included</h3>
            Drive confidently with your choice of protection plans offered through Thuro Insurance Agency — you’re covered up to $1 million in liability insurance provided by Freedom Reciprocal.</div>

          </div>

          <Link to="/cars/">
            <form className="form-book-perfect" align="center">
              <button className="post-grid" type="submit">Book the perfect car</button>
            </form>    
          </Link>

        {/* Cars Slider */}

        {/* Borsche */}

        <div className="spacer"/>

        <div className="borsche">
          <div className="borsche-container">
            <h3 className="borsche-h3">DRIVING AT ITS FINEST</h3>
            <br />            <br />
            <h2 className="borsche-h2">Discover the Borsche
              <br />Host Program</h2>
            <br />
            <p className="borsche-p">
              Thuro and Borsche are proud to introduce the Borsche Host Program, a pilot program in San Francisco and Los Angeles that combines curated Borsche vehicles with top Thuro hosts to give you the complete Borsche experience.
            </p>
            <br />

            <form action="">
              <button type="submit">Explore the program</button>
            </form>
          </div>
        </div>

        <div className="book-container">
          <img className="book-pic" alt="book-unlock-go" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/book-unlock-go.jpg?raw=true"/>

          <div className="book-separator">
            <h2 className="book-header">Book, unlock, and go!</h2>
              <br/>
            <p className="book-desc">Unlock the next level of car sharing convenience with Thuro Go — find, book, and unlock cars on demand, right from the Thuro app.</p>
            <form className="form-learn-more" align="center" action="">
              <button className="post-grid-lm" type="submit">Learn more</button>
            </form>    
          </div>
          
        </div>

        {/* Tiles */}

        <div className="tiles-container">
          <div className="tiles-bmw">
            <h3 className="tiles-text-h3">ASK THE</h3>
            <h2 className="tiles-text-h2">Carculator</h2>
            <p className="tiles-text-desc">Find out how much your car could earn for you.</p>
          </div>

          <div className="tiles-map">
            <h3 className="tiles-text-h3">READ UP ON</h3>
            <h2 className="tiles-text-h2">That good-good</h2>
            <p className="tiles-text-desc">Preuse cool cars and good stories on the Flexo blog.</p>
          </div>

        </div>

        {/* Wires */}

          <div className="wires-container">
            <h3 className="wires-header">The car that pays for itself</h3>
          <p className="wires-text">Make a dent in your monthly car payments — on average, Thuro hosts can cover their payments by sharing their cars just nine days per month.</p>
            <br/><br/>  
            <p className="wires-text">You’re covered with up to $1 million in liability insurance, and your car is contractually protected against theft and physical damage. Or bring your own commercial rental insurance and take a bigger piece of the pie.*</p>

            <Link to="/cars/new">
              <button onClick={ !this.props.currentUserId ? () => {this.props.openModal('login')} : null } type="submit">List your car</button>
            </Link>

          </div>

      {/* Footer */}

      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
})

const mDTP = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mSTP,
  mDTP
)(Main);