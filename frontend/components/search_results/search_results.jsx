import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from '../spot_map/spot_map';
import FilterForm from './filter_form';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-results-page">
        <div className="index-half">
          <FilterForm updateFilter={this.props.updateFilter}/>
          <SpotIndex
            spots={this.props.spots}
            location={this.props.location.query}
            updateLocation={this.props.updateLocation} />
        </div>
        <div className="map-half">
          <SpotMap
            spots={this.props.spots}
            mapLocation={this.props.mapLocation}
            updateLocation={this.props.updateLocation}
            updateFilter={this.props.updateFilter}/>
        </div>
      </div>
    );
  }
}

export default SearchResults;
