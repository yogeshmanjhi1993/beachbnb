import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: { lat: -16.498855, lng: -151.741460 },
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {
    return <div id="map-container" ref="map"></div> ;
  }
}

export default SpotMap;
