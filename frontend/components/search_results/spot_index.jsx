import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({spots}) => {
  return (
    <div className="spot-index">
        <p>{spots.length} Rentals</p>
        {
          spots.map( spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))
        }
    </div>
  );
};

export default SpotIndex;
