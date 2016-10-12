import { RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_BOOKING:
      const newBooking = { [action.booking.id]: action.booking };
      return merge({}, state, newBooking);
    default:
      return state;
  }
};

export default BookingReducer;
