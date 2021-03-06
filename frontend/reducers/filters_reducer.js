import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {},
  priceRange: { min: 10, max: 100000 },
  roomtype: ["shared", "whole", "private"]
});

const FiltersReducer = (state = _defaultFilters, action) => {
  switch(action.type) {
    case UPDATE_FILTER:
      let newState = merge({}, state);
      newState[action.filter] = action.value;
      return newState;
    default:
      return state;
  }
};

export default FiltersReducer;
