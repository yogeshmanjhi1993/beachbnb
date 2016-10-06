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

const SpotMiddleware = ({ getState, dispatch }) => next => action => {
  const spotsSuccess = data => dispatch(receiveSpots(data));
  const spotSuccess = data => dispatch(receiveSingleSpot(data));
  switch(action.type) {
    case REQUEST_SPOTS:
      fetchSpots(spotsSuccess);
      return next(action);
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
