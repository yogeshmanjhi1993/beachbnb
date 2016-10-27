import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateLocation({ lat:parseFloat(this.props.location.lat), lng:parseFloat(this.props.location.lng) });

  }



  render() {
    let rentalText = (this.props.spots.length === 1) ? "Rental" : "Rentals";
    return (
      <div className="spot-index">
          {
            this.props.spots.map(spot => (
              <SpotIndexItem spot={spot} key={spot.id} />
            ))
          }
      </div>
    );
  }
}

export default SpotIndex;
