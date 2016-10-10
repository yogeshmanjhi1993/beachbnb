import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from '../spot_map/spot_map';
import FilterForm from './filter_form';

const SearchResults = ({ spots, updateFilter, location, updateLocation }) => (
  <div className="search-results-page">
    <div className="index-half">
      <FilterForm updateFilter={updateFilter}/>
      <SpotIndex spots={spots} />
    </div>
    <div className="map-half">
      <SpotMap spots={spots} updateFilter={updateFilter} location={location} updateLocation={updateLocation}/>
    </div>
  </div>
);

export default SearchResults;
