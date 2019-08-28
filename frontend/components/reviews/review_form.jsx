import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      title: null,
      body: null
    };
  }

  render() {
    return (
      <div className="review-form-container">
        <h1>
          this will be the review form
        </h1>
      </div>
    )
  }
}

export default withRouter(ReviewForm);