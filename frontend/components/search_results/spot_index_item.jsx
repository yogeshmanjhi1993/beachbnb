import React from 'react';
import { hashHistory } from 'react-router';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <div className="spot-index-item">
        <p>{spot.name}</p>
        <p>guests: {spot.guests}</p>
        <p>{roomType}</p>
        <p>${spot.price}</p>
      </div>
    );
  }
}

export default SpotIndexItem;
