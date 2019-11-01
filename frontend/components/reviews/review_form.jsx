import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: props.currentUserId,
      rating: '',
      title: '',
      body: '',
      car_id: props.carId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRadio = this.updateRadio.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
      .then(this.props.closeModal)
      .then(this.props.history.push(`/cars/${this.props.carId}`))
      .then(setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight/3);
      }, 500));
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  updateRadio(e) {
    this.setState({
      rating: e.currentTarget.value
    });
  }

  render() {

    return (
      <div className="review-modal-container">
        <form className="review-modal-form" onSubmit={this.handleSubmit}>
          <h3 className="review-modal-form-header">Create A Review</h3>
          <br />
          <div className="review-modal-container">
            <br />
            <label>{`Rating (1-5)`}
            <br/>
              {/* <input type="text" 
                value={this.state.rating} 
                onChange={this.update("rating")} 
                placeholder="1-5"
              /> */}
                1
              <input type="radio" 
                onChange={this.update("rating")}
                value="1"
              /> 2  
              <input type="radio" 
                onChange={this.update("rating")}
                value="2"
              /> 3 
              <input type="radio" 
                onChange={this.update("rating")}
                value="3"
              /> 4 
              <input type="radio" 
                onChange={this.update("rating")}
                value="4"
              /> 5 
              <input type="radio" 
                onChange={this.update("rating")}
                value="5"
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
          <div className="review-modal-bottom">
            <br />
          </div>
          <div className="review-modal-x" onClick={this.props.closeModal}>X</div>
        </form>
      </div>


    )
  }
}

export default withRouter(ReviewForm);