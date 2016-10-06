import React from 'react';
import { hashHistory } from 'react-router';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot;
    return (
      <div className="spot-index-item">
        <p>{spot.name}</p>
      </div>
    );
  }
}

export default SpotIndexItem;
