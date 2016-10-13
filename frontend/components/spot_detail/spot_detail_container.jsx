import { connect } from 'react-redux';
import SpotDetail from './spot_detail';
import { requestSingleSpot } from '../../actions/spot_actions';
import { createBooking } from '../../actions/booking_actions';
import { requestReviews } from '../../actions/review_actions';


const mapStateToProps = state => ({
  spots: state.spots,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleSpot: (id) => dispatch(requestSingleSpot(id)),
  createBooking: (booking) => dispatch(createBooking(booking)),
});

const SpotDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotDetail);

export default SpotDetailContainer;
