import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import { updateLocation } from '../../actions/location_actions';
import { requestBookings } from '../../actions/booking_actions';
import Navbar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  location: state.location,
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  updateLocation: (location) => dispatch(updateLocation(location)),
  requestBookings: (guestId) => dispatch(requestBookings(guestId))
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;
