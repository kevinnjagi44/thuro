import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        this will be the review form
      </h1>
    )
  }
}

export default withRouter(ReviewForm);