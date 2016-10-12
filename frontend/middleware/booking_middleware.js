import { REQUEST_BOOKING,
         RECEIVE_BOOKING,
         CREATE_BOOKING,
         requestBooking,
         receiveBooking,
       } from '../actions/booking_actions';

import { fetchBooking, createBooking } from '../util/booking_api_util';

const BookingMiddleware = ({ getState, dispatch }) => next => action => {
  const bookingSuccess = data => dispatch(receiveBooking(data));
  switch(action.type) {
    case CREATE_BOOKING:
      debugger
      createBooking(action.booking, bookingSuccess);
      break;
    default:
      return next(action);
  }
};

export default BookingMiddleware;
