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
      <div className="review-modal-container">
        <form className="review-modal-form" onSubmit={this.handleSubmit}>
          <h3 className="modal-form-header">Create A Review</h3>
          <br />
          <div className="modal-container">
            <br />
            <label>{`Rating (1-5)`}
            <br/>
              <input type="text">

              </input>
            </label>
            <br />

            <label>Title
            <br/>
              <input type="text">

              </input>
            </label>
            <br />
            <label>Body
            <br/>

              <textarea className="review-modal-textarea">

              </textarea>
            </label>
            <br />
            <br />
            <input type="submit" onClick={this.handleSubmit} value="Write Review" />
          </div>
          <div className="modal-bottom">
            <br />
          </div>
          <div className="modal-x" onClick={this.props.closeModal}>X</div>
        </form>
      </div>


    )
  }
}

export default withRouter(ReviewForm);