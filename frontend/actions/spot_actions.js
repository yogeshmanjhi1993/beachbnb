export const REQUEST_SPOTS = "REQUEST_SPOTS";
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const REQUEST_SINGLE_SPOT = "REQUEST_SINGLE_SPOT";
export const RECEIVE_SINGLE_SPOT = "RECEIVE_SINGLE_SPOT";
export const CREATE_SPOT = "CREATE_SPOT";

export const requestSpots = () => ({
  type: REQUEST_SPOTS
});

export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const requestSingleSpot = id => ({
  type: REQUEST_SINGLE_SPOT,
  id
});

export const receiveSingleSpot = spot => ({
  type: RECEIVE_SINGLE_SPOT,
  spot
});

export const createSpot = () => ({
  type: CREATE_SPOT,
});
