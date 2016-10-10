import { connect } from 'react-redux';
import Home from './home';
import { updateLocation } from '../../actions/location_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateLocation: (location) => dispatch(updateLocation(location))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
