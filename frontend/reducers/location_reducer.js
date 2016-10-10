import { UPDATE_LOCATION } from '../actions/location_actions';
import merge from 'lodash/merge';

const _defaultLocation = {
  name: "",
  lat: 0,
  lng: 0
};

const LocationReducer = (state = _defaultLocation, action) => {
  switch(action.type) {
    case UPDATE_LOCATION:
      let newState = merge({}, state, action.location);
      return newState;
    default:
      return state;
  }
};

export default LocationReducer;
