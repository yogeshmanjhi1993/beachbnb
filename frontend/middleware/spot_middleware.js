import { REQUEST_SPOTS,
         RECEIVE_SPOTS,
         REQUEST_SINGLE_SPOT,
         RECEIVE_SINGLE_SPOT,
         CREATE_SPOT,
         receiveSpots,
         requestSingleSpot,
         receiveSingleSpot,
         requestSpots
       } from '../actions/spot_actions';
import { fetchSpots, fetchSpot, createSpot } from '../util/spot_api_util';
import { UPDATE_FILTER } from '../actions/filter_actions';

const SpotMiddleware = ({ getState, dispatch }) => next => action => {
  const spotsSuccess = data => dispatch(receiveSpots(data));
  const spotSuccess = data => dispatch(receiveSingleSpot(data));
  switch(action.type) {
    case REQUEST_SPOTS:
      const filters = getState().filters;
      fetchSpots(spotsSuccess, filters);
      return next(action);
    case UPDATE_FILTER:
      next(action);
      dispatch(requestSpots());
      break;
    case REQUEST_SINGLE_SPOT:
      fetchSpot(action.id, spotSuccess);
      break;
    case CREATE_SPOT:
      createSpot(action.spot, spotSuccess);
      break;
    default:
      return next(action);
  }
};

export default SpotMiddleware;
