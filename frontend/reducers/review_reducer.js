import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_REVIEW:
      const newReview = { [action.review.id]: action.review };
      return merge({}, state, newReview);
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default ReviewReducer;
