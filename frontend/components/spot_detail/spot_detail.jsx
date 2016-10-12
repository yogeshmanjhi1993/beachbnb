import React from 'react';
import { DateRangePicker } from 'react-dates';

class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleSpot(this.props.params.id);
    this.spot = this.props.spots[this.props.params.id];
    if (this.spot.roomtype === "whole") {
      this.roomType = "Entire home/apt";
    } else if (this.spot.roomtype === "shared") {
      this.roomType = "Shared room";
    } else {
      this.roomType = "Private room";
    }

    if (this.spot.guests === 1) {
      this.guestText = "Guest";
    } else {
      this.guestText = "Guests";
    }

    if (this.spot.beds === 1) {
      this.bedText = "Bed";
    } else {
      this.bedText = "Beds";
    }
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleBooking() {
    const booking = {
      booking: {
        guest_id: this.props.currentUser.id,
        spot_id: this.spot.id,
        start_date: this.state.startDate.toDate(),
        end_date: this.state.endDate.toDate()
      }
    };
    this.props.createBooking(booking);
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div className="spot-detail-page">
        <img src={this.spot.image} className="spot-picture"/>
        <div className="spot-detail-body">
          <div className="spot-detail-head">
            <div className="spot-host-info">
              <p>{this.spot.host.fname}</p>
            </div>
            <div className="spot-main-info">
              <h1 className="spot-detail-name">{this.spot.name}</h1>
              <p className="subinfo">{this.spot.city}, {this.spot.country}</p>
              <div className="spot-main-attributes subinfo">
                <div className="attribute-div">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <p>
                    {this.roomType}
                  </p>
                </div>
                <div className="attribute-div">
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <p>
                    {this.spot.guests} {this.guestText}
                  </p>
                </div>
                <div className="attribute-div">
                  <i className="fa fa-bed" aria-hidden="true"></i>
                  <p>
                    {this.spot.beds} {this.bedText}
                  </p>
                </div>
              </div>
            </div>
            <div className="booking-box">
              <div className="price-box">
                <p>${this.spot.price}</p>
                <p>Per Night</p>
              </div>
              <div className="booking-form">
                <DateRangePicker
                  {...this.props}
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={focusedInput}
                  startDate={startDate}
                  endDate={endDate}
                  className="daterange-picker"
                  />

                <input
                  type="button"
                  value="Request to Book"
                  className="book-button"
                  onClick={this.handleBooking}/>
                <p>You won't be charged ... ever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotDetail;
