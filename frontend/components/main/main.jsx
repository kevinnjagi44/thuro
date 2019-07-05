import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div> 
        
      <div className="main-container">
        <div>
          <div className="spacer">
            &nbsp;
          </div>
          <h2 className="banner">Way better than a rental car</h2>
          <h2 className="caption">Book unforgettable cars from local hosts around the world</h2>
        </div>
      </div>
        <div>
          Middle stuff here
        </div>

        <div className="footer">
          Footer
        </div>

      </div>

    )
  }



}

export default Main;