import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SpotMiddleware from './spot_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotMiddleware
);

export default RootMiddleware;
