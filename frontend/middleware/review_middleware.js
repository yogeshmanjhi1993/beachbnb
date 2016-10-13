import { CREATE_REVIEW, REQUEST_REVIEWS, receiveReview, receiveReviews } from '../actions/review_actions';
import { createReview, fetchReviews } from '../util/review_api_util';

const ReviewMiddleware = ({ getState, dispatch }) => next => action => {
  const reviewSuccess = data => dispatch(receiveReview(data));
  const reviewsSuccess = data => dispatch(receiveReviews(data));
  switch(action.type) {
    case CREATE_REVIEW:
      createReview(action.review, reviewSuccess);
      break;
    case REQUEST_REVIEWS:
      fetchReviews(action.spotId, reviewsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ReviewMiddleware;
