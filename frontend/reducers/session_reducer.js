import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _noUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _noUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _noUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _noUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _noUser, {
        errors
      });
    case CLEAR_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
