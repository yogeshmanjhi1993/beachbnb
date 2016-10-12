export const createBooking = (booking, success) => {
  debugger
  $.ajax({
    method: "POST",
    url: 'api/bookings',
    data: booking,
    success
  });
};

export const fetchBooking = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/bookings/${id}`,
    success
  });
};
