// import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
// import RentalRequestsContainer from '../notifications/rental_requests_alert_container';

// const NavBarModal = ({ modal, closeModal, modalType }) => {
  
//   if (!modal || modal !== modalType) {
//     return null;
//   }

//   let component;

//   switch (modal) {
//     case 'rentalRequests':
//       component = <RentalRequestsContainer />
//       break;
//     default:
//       return null;
//   }

//   const handleClick = (e) => {
//     e.stopPropagation();
//     closeModal();
//   }

//   return (
//     <div className="modal">
//       <div className="transparent-modal-background" onClick={handleClick}>
//       </div>
//       <div
//         className="relative-modal-child"
//         onClick={e => e.stopPropagation()}>
//         {component}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   modal: state.ui.modal,
//   modalArgs: state.ui.modalArgs
// });

// const mapDispatchToProps = dispatch => ({
//   closeModal: () => dispatch(closeModal())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBarModal);