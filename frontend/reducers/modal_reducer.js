import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { OPEN_REVIEW_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      // return action.modal;
      return action.modal
    case CLOSE_MODAL:
      return null;
    case OPEN_REVIEW_MODAL:
      // return action.modal;
      return {
        modal: action.modal,
        carId: action.carId
      };
    default:
      return state;
  }
}
