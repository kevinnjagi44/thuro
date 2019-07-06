import { connect } from 'react-redux';

import CarIndex from './car_index';


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarIndex);