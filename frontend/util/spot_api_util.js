export const fetchSpots = (success, filters) => {
  $.ajax({
    method: "GET",
    url: "api/spots",
    data: filters,
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
  const formData = new FormData();
  formData.append("spot[host_id]", spot.host_id);
  formData.append("spot[lat]", spot.lat);
  formData.append("spot[lng]", spot.lng);
  formData.append("spot[name]", spot.name);
  formData.append("spot[description]", spot.description);
  formData.append("spot[guests]", spot.guests);
  formData.append("spot[beds]", spot.beds);
  formData.append("spot[roomtype]", spot.roomtype);
  formData.append("spot[price]", spot.price);
  formData.append("spot[address]", spot.address);
  formData.append("spot[kind]", spot.kind);
  formData.append("spot[city]", spot.city);
  formData.append("spot[country]", spot.country);
  formData.append("spot[image]", spot.image);
  debugger
  $.ajax({
    method: "POST",
    url: 'api/spots',
    processData: false,
    contentType: false,
    data: formData,
    success
  });
};
