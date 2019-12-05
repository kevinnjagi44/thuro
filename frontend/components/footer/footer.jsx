import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div>

        <div className="footer-top">
          *&nbsp;&nbsp;&nbsp;All Freedom Reciprocal liability insurance in the US is offered through Thuro Insurance Agency. Terms, conditions, and exclusions apply.
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
                <li>Thuro for business</li>
              </ul>
            </div>

            <div className="footer-col">
              <ul>
                <li><h2 className="footer-header">Learn more</h2></li>
                <li>How Thuro works</li>
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
                <li><img src="https://github.com/fsiino/thuro/blob/master/app/assets/images/footer-social.png?raw=true" /></li>
                <li>Read our blog</li>
                <li>Contact customer support</li>
              </ul>
            </div>
          </div>

          <div className="footer-spacer" />


          <div className="footer-2-col-container">
            <div className="footer-bottom-row">
              <ul>
                <li><h2 className="footer-header">About Thuro</h2></li>
                <li>
                  &copy; 2019 Thuro&nbsp;&nbsp;&nbsp;
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
                <li><img src="https://github.com/fsiino/thuro/blob/master/app/assets/images/english-us.png?raw=true" />&nbsp;English (USA)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      )
  }

}

export default withRouter(Footer);