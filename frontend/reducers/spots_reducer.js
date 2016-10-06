import { RECEIVE_SPOTS, RECEIVE_SINGLE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SINGLE_SPOT:
      const newSpot = { [action.spot.id]: action.spot };
      return merge({}, state, newSpot);
    default:
      return state;
  }
};

export default SpotsReducer;
