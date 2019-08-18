export const fetchReviews = (carId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/${carId}/reviews`,
    })
  );
};

export const fetchReview = (reviewId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/reviews/${reviewId}`,
      data: { review }
    })
  );
};

export const createReview = (review) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/cars/${review.carId}/reviews`,
      data: { review }
    })
  );
};

export const editReview = (review) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/reviews/${review.id}`
    })
  );
};

export const deleteReview = (review) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/reviews/${review.id}`,
    })
  );
};