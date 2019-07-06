import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div> 

      {/* Main */}

        <div className="main-container">
          <div>
            <div className="spacer">
              &nbsp;
            </div>
            <h2 className="banner">Way better than a rental car</h2>
            <h2 className="caption">Book unforgettable cars from local hosts around the world</h2>
          </div>
        </div>

      {/* Middle */} 

        <div className="mid-container">
          <h3 className="mid-h2">Skip The Rental Counter</h3>
          <br/>
          <h2 className="mid-h3">Discover the world’s largest car sharing marketplace</h2>
        </div>
        
          <br/>
          <br/>
          <div className="grid-container">

            <div className="item-1">
              <img alt="car-photos" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-car-photos.png?raw=true"/>
            </div>

            <div className="item-2">
              <h3 className="mid-header">Endless options</h3>
              Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it.</div>

            <div className="thumbs-up">
              <img alt="car-photos" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-thumbs-up.png?raw=true" />
            </div>              

            <div className="item-4">
              <h3 className="mid-header">Free cancellation</h3>
              Cancel for free up to 24 hours before your trip starts. Because life happens and it helps to be flexible when it does.</div>

            <div className="item-5">
              <img alt="support" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-support.png?raw=true" />
            </div>            

            <div className="item-6">
              <h3 className="mid-header">24/7 customer support</h3>
              Rest easy knowing that everyone in the Torino community is screened, and 24/7 customer support and roadside assistance are just a click away.</div>

            <div className="item-7">
              <img alt="shield" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-shield-check.png?raw=true" />
            </div>            

            <div className="item-8">
              <h3 className="mid-header">Insurance options included</h3>
            Drive confidently with your choice of protection plans offered through Torino Insurance Agency — you’re covered up to $1 million in liability insurance provided by Liberty Mutual.</div >
            
          </div>

          <div className="wires-container">
            <h3 className="wires-header">The car that pays for itself</h3>
            <p className="wires-text">Make a dent in your monthly car payments — on average, Turo hosts can cover their payments by sharing their cars just nine days per month.</p>
            <br/><br/>  
            <p className="wires-text">You’re covered with up to $1 million in liability insurance, and your car is contractually protected against theft and physical damage. Or bring your own commercial rental insurance and take a bigger piece of the pie.*</p>
          </div>


      {/* Footer */}


        <div className="footer-top">
          *&nbsp;&nbsp;&nbsp;All Liberty Mutual liability insurance in the US is offered through Torino Insurance Agency. Terms, conditions, and exclusions apply.
        </div>

        <div className="footer-container">
          <div className="footer-4-col-container">
            <div className="footer-col">
              <ul>
                <li><h2 className="footer-header">Get Started</h2></li>
                <li>Get the iPhone app</li>
                <li>Get the Android app</li>
                <li>Car rental alternatives</li>
                <li>Make money with your car</li>
                <li>Carculator</li>
                <li>All-Star Hosts</li>
                <li>Torino for business</li>
              </ul>
            </div>
        
            <div className="footer-col">
              <ul>
                <li><h2 className="footer-header">Learn more</h2></li>
                <li>How Torino works</li>
                <li>Policies</li>
                <li>Trust & safety</li>
                <li>Owner tools</li>
                <li>Traveler FAQs</li>
              </ul>
            </div>
        
            <div className="footer-col">
              <ul>
                <li><h2 className="footer-header">Vehicle types</h2></li> 
                <li>Trucks</li>
                <li>Vans</li>
                <li>Luxury & Exotic</li>
                <li>Minivans</li>
                <li>SUVs</li>
                <li>Cars</li>
              </ul>
            </div>
        
            <div className="footer-col">
              <ul>
                <li><h2 className="footer-header">Top cities</h2></li>
                <li>Las Vegas</li> 
                <li>Denver</li>
                <li>Los Angeles</li>
                <li>Orlando</li>
                <li>San Diego</li>
                <li>San Francisco</li>
                <li>Atlanta</li>
                <li>Miami</li>
              </ul>
            </div>
        
            <div className="footer-col">
              <ul>
                <li><h2 className="footer-header">Talk to us</h2></li>
                  <li><img src="https://github.com/fsiino/torino/blob/master/app/assets/images/footer-social.png?raw=true"/></li> 
                <li>Read our blog</li>
                <li>Contact customer support</li>
              </ul>
            </div>
          </div>

          <div className="footer-spacer"/>
          

          <div className="footer-2-col-container">
            <div className="footer-bottom-row">
              <ul>
                <li><h2 className="footer-header">About Torino</h2></li>
                <li>
                  &copy; 2019 Torino&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  Press&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  Jobs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  OpenRoad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                  Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
              </ul>
            </div>
            <div className="footer-bottom-row">
              <ul>
                <li><h2 className="footer-header">Language</h2></li>
                <li><img src="https://github.com/fsiino/torino/blob/master/app/assets/images/english-us.png?raw=true"/>&nbsp;English (USA)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Main;