export const CREATE_BOOKING = "CREATE_BOOKING";
export const REQUEST_BOOKING = "REQUEST_BOOKING";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

export const createBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking
});

export const requestBooking = id => ({
  type: REQUEST_BOOKING,
  id
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});
