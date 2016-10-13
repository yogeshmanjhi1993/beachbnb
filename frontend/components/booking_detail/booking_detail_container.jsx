import { connect } from 'react-redux';
import BookingDetail from './booking_detail';

const mapStateToProps = state => ({
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({

});

const BookingDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingDetail);

export default BookingDetailContainer;
