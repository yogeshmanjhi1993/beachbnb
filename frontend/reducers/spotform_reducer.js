import { UPDATE_FIELD } from '../actions/spotform_actions';
import merge from 'lodash/merge';

const _defaultFields = {
  host_id: "",
  lat: "",
  lng: "",
  name: "",
  description: "",
  guests: "",
  beds: "",
  roomtype: "",
  price: "",
  address: "",
  kind: "",
  city: "",
  country: ""
};

const SpotformReducer = (state = _defaultFields, action) => {
  switch(action.type) {
    case UPDATE_FIELD:
      let newFields = merge({}, state);
      newFields[action.field] = action.value;
      return newFields;
    default:
      return state;
  }
};

export default SpotformReducer;
