import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }  

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.id);
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
            <span>
              No reviews yet. Rent this car today and be the first to review!
            </span>
          </>
        )
      } else {
        const sorted = reviews.sort((r1, r2) => moment(r2.created_at) - moment(r1.created_at));
        return (
        sorted.map(review => {
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
                    <span className="review-index-auth-name">{capitalizeName(review.fName)}</span> - {moment(review.created_at).format('ll')} 
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

    const avgReviewScore = () => {
      let revScores = reviews.map(review => review.rating)
      let revScoreSum = revScores.reduce((acc, el) => acc + el, 0)
      return (Math.round(revScoreSum / reviews.length) - 0.5) + 0.5
    }

    return (
      <>
        <div className="car-show-star-wrapper">
          <div className="car-show-star-inner">

            {(() => {
              if (reviews.length !== 0) {
                if (avgReviewScore() === 0) {
                  return (
                    <>
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 0.5) {
                  return (
                    <>
                      <div className="car-show-left-half-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 1) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 1.5) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-half-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 2) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 2.5) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-half-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 3) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-empty-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 3.5) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-half-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 4) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-empty-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 4.5) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-half-star" />
                    </>
                  )
                }
                if (avgReviewScore() === 5.0) {
                  return (
                    <>
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                      <div className="car-show-left-full-star" />
                    </>
                  )
                }
              } else {
                return null;
              }
            })()}
            {reviews.length === 0 ? null : <>∙&nbsp;</>} 
            {reviews.length} {reviews.length > 1 ? 'ratings' : reviews.length === 0 ? 'ratings' : 'rating'}
          </div>

        </div>

        <DisplayReviews /> 
      </>
    )
  }
}

export default withRouter(ReviewIndex);