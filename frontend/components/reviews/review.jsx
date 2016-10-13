import React from 'react';
import { MONTHS } from '../../util/month_list';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.updateBody = this.updateBody.bind(this);
    this.reviewSubmit = this.reviewSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  reviewSubmit(e) {
    e.preventDefault();
    const review = {
      review: {
        body: this.state.body,
        user_id: this.props.currentUser.id,
        spot_id: this.props.spot.id
      }
    };
    this.setState({ body: "" });
    this.props.createReview(review);
  }

  componentWillMount() {
    this.props.requestReviews(this.props.spot.id);
  }

  render() {
    const reviews = Object.keys(this.props.reviews).map((key) => this.props.reviews[key]);
    const reviewLis = reviews.map(review => {
      let createdAt = new Date(review.created_at);
      let month = MONTHS[createdAt.getMonth()];
      let year = 1900 + createdAt.getYear();
      return (
        <li className="review-list-item" key={review.id}>
          <p className="reviewer">{review.user.fname}</p>
          <div className='review-details'>
            <p>{review.body}</p>
            <p>{month} {year}</p>
          </div>
        </li>
      );
    });
    return (
      <div className="review-box">
        <div className="review-body">
          <h3>Reviews</h3>
          <ul className="review-list">
            {reviewLis}
          </ul>
        </div>
        <form className="review-form" onSubmit={this.reviewSubmit}>
          <h4>Add a review</h4>
          <textarea
            placeholder="your review ..."
            rows="8"
            cols="50"
            value={this.state.body}
            onChange={this.updateBody}>
          </textarea>
          <input type="submit" value="Add review" className="review-submit"/>
        </form>
      </div>
    );
  }
}

export default Review;
