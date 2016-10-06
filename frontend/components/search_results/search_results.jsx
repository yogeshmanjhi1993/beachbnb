import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from '../spot_map/spot_map';

const SearchResults = ({ spots }) => (
  <div className="search-results-page">
    <div className="index-half">
      <SpotIndex spots={spots} />
    </div>
    <div className="map-half">
      <SpotMap spots={spots} />
    </div>
  </div>
);

export default SearchResults;
