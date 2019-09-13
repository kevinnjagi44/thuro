import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      title: null,
      body: null,
      car_id: props.carId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.closeModal);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
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
              <input type="text" 
                value={this.state.rating} 
                onChange={this.update("rating")} 
                placeholder="1-5"
              />
            </label>
            <br />

            <label>Title
            <br/>
              <input type="text" 
                value={this.state.title} 
                onChange={this.update("title")} 
                placeholder="Add a Title for your Review" 
              />
            </label>
            <br />
            <label>Body
            <br/>

              <textarea className="review-modal-textarea" 
                value={this.state.body} 
                onChange={this.update("body")} 
                placeholder="How was your experience driving this car?"
              />
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