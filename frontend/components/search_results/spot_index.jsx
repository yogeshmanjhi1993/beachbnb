import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({spots}) => {
  let rentalText = (spots.length === 1) ? "Rental" : "Rentals";
  return (
    <div className="spot-index">
        <p>{spots.length} {rentalText}</p>
        {
          spots.map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))
        }
    </div>
  );
};

export default SpotIndex;
