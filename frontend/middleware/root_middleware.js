import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SpotMiddleware from './spot_middleware';
import BookingMiddleware from './booking_middleware';
import ReviewMiddleware from './review_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotMiddleware,
  BookingMiddleware,
  ReviewMiddleware
);

export default RootMiddleware;
