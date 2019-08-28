import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }  


  render() {
    return (
      <div className="review-index-container">
        {/* <h1>
          These are the reviews.
        </h1> */}
      </div>
    )
  }
}

export default withRouter(ReviewIndex);