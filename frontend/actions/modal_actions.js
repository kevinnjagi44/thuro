export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const OPEN_REVIEW_MODAL = 'OPEN_REVIEW_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openReviewModal = (modal, carId) => {
  return {
    type: OPEN_REVIEW_MODAL,
    modal,
    carId
  };
};
