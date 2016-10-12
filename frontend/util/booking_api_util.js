export const createBooking = (booking, success) => {
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

export const fetchBookings = (guestId, success) => {
  $.ajax({
    method: "GET",
    url: "api/bookings",
    data: { guest_id: guestId },
    success,
    error: () => console.log('error in booking api util#fetchBookings')
  });
};
