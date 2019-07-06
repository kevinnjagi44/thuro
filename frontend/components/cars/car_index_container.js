import { connect } from 'react-redux';

import CarIndex from './car_index';

const mapStateToProps = (state) => ({
  cars: Object.values(state.entities.cars)
});

const mapDispatchToProps = dispatch => ({
  fetchCars: () => dispatch(fetchCars())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarIndex);