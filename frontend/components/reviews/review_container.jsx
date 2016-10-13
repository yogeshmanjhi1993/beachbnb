import { connect } from 'react-redux';
import Review from './review';
import { createReview, requestReviews } from '../../actions/review_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  requestReviews: spotId => dispatch(requestReviews(spotId))
});

const ReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);

export default ReviewContainer;
