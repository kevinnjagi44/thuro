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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(review)
      .then(this.props.closeModal);
  }

  render() {
    return (
      <div className="review-form-container">
        <h1>
          this will be the review form
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Rating
            
          </label>
          <br/>
          <label>Title

          </label>
          <br/>
          <label>Body

          </label>
          <br/>
          <input type="submit" value="Write Review"/>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);