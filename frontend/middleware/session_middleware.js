import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';
import { requestBookings } from '../actions/booking_actions';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const success = user => {
    action.callback();
    dispatch(receiveCurrentUser(user));
    dispatch(requestBookings(user.id));
  };

  const error = res => dispatch(receiveErrors(res.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
