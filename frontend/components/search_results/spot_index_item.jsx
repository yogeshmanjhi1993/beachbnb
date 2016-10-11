import React from 'react';
import { hashHistory } from 'react-router';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToSpotShow = this.redirectToSpotShow.bind(this);
  }

  redirectToSpotShow(e) {
    hashHistory.push(`/spots/${this.props.spot.id}`);
  }

  render() {
    const spot = this.props.spot;
    let roomType;
    if (spot.roomtype === "shared") {
      roomType = "Shared room";
    } else if (spot.roomtype === "whole") {
      roomType = "Entire home/apt";
    } else {
      roomType = "Private room";
    }

    let guestText = (spot.guests === 1) ? "guest" : "guests";

    return (
      <div className="spot-index-item" onClick={this.redirectToSpotShow}>
        <div className="image-item-div">
          <img src={spot.image} alt="spot image" className="index-item-img" />
          <p className="spot-price">${spot.price}</p>
        </div>
        <p className="spot-name">{spot.name}</p>
        <p className="spot-type-guests">{roomType} · {spot.guests} {guestText}</p>
      </div>
    );
  }
}

export default SpotIndexItem;
