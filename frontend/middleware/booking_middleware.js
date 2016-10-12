import { REQUEST_BOOKING,
         RECEIVE_BOOKING,
         CREATE_BOOKING,
         REQUEST_BOOKINGS,
         requestBooking,
         receiveBooking,
         receiveBookings,
       } from '../actions/booking_actions';

import { fetchBooking, createBooking, fetchBookings } from '../util/booking_api_util';

const BookingMiddleware = ({ getState, dispatch }) => next => action => {
  const bookingSuccess = data => dispatch(receiveBooking(data));
  const bookingsSuccess = data => dispatch(receiveBookings(data));
  switch(action.type) {
    case CREATE_BOOKING:
      createBooking(action.booking, bookingSuccess);
      break;
    case REQUEST_BOOKINGS:
      fetchBookings(action.guestId, bookingsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default BookingMiddleware;
