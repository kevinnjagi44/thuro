import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }  

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.id)
  }


  render() {

    const { reviews } = this.props;

    const capitalizeName = (fname) => {
      return fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
    };

    const DisplayReviews = () => {
      if (!reviews.length) {
        return (
          <>
            <span>No reviews yet. Rent this car today and be the first to review!</span>
          </>
        )
      } else {
        return (
        reviews.map(review => {
          return (
          <div key={review.id}>
            <div className="review-index-itm-container">

              <div className="review-index-itm-wrapper">
                <div className="review-index-avatar">
                </div>
                <div className="review-index-right-of-avatar">
                  <div className="review-index-left-content">
                    {review.body}
                  </div>
                  <br />
                  <div className="review-index-auth-date">
                    <span className="review-index-auth-name">{capitalizeName(review.fName)}</span> - {review.created_at}
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })
      )
      }
    }

    return (
      <>
        <div className="car-show-star-wrapper">
          <div className="car-show-star-inner">
            <div className="car-show-left-full-star" />
            <div className="car-show-left-full-star" />
            <div className="car-show-left-full-star" />
            <div className="car-show-left-full-star" />
            <div className="car-show-left-full-star" />
            ∙ {`${reviews.length}`} {`${reviews.length > 1 ? 'reviews' : 'review'}`}
          </div>
        </div>

        <DisplayReviews /> 
      </>
    )
  }
}

export default withRouter(ReviewIndex);