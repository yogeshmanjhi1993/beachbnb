export const fetchSpots = (success) => {
  $.ajax({
    method: "GET",
    url: "api/spots",
    success,
    error: () => console.log('error in spot api util#fetchSpots')
  });
};

export const fetchSpot = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/spots/${id}`,
    success
  });
};

export const createSpot = (spot, success) => {
  $.ajax({
    method: "POST",
    url: 'api/spots',
    data: spot,
    success
  });
};
