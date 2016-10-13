import React from 'react';
import { hashHistory } from 'react-router';
import { MONTHS, DAYS } from '../../util/month_list';

class BookingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.booking = this.props.bookings[this.props.params.id];
    this.spot = this.booking.spot;
    this.startDate = new Date(this.booking.start_date);
    this.endDate = new Date(this.booking.end_date);
    this.nights = Math.floor((this.endDate - this.startDate) / 86400000);
  }

  componentWillUpdate(nextProps) {
    this.booking = this.props.bookings[nextProps.params.id];
    this.spot = this.booking.spot;
    this.startDate = new Date(this.booking.start_date);
    this.endDate = new Date(this.booking.end_date);
    this.nights = Math.floor((this.endDate - this.startDate) / 86400000);
  }

  render() {
    return (
      <div className="booking-detail-page">
        <h1>You're going to {this.spot.city}</h1>
        <div className="booking-attributes" >
          <div className="check-details">
            <div className="check-in">
              <h4>Check In</h4>
              <p>{DAYS[this.startDate.getDay()]}, {MONTHS[this.startDate.getMonth()]} {this.startDate.getDate()}</p>
            </div>
            <div className="check-out">
              <h4>Check Out</h4>
              <p>{DAYS[this.endDate.getDay()]}, {MONTHS[this.endDate.getMonth()]} {this.endDate.getDate()}</p>
            </div>
          </div>
          <div className="address" >
            <h4>Address</h4>
            <p>{this.spot.address}</p>
            <p>{this.spot.city}</p>
            <p>{this.spot.country}</p>
          </div>
          <div className="billing" >
            <h4>Billing</h4>
            <p>{this.nights} nights total</p>
            <p>${this.spot.price * this.nights}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default BookingDetail;
