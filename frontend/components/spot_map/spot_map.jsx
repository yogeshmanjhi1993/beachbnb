import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {

  getQueryParameters() {
    return document.location.hash.slice(9)
      .replace(/(^\?)/,'').split("&")
      .map(function(n) {
        n = n.split("=");
        this[n[0]] = n[1];
        return this;
      }
      .bind({}))[0];
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: { lat: -16.498855, lng: -151.741460 },
      zoom: 13
    };
    const queryOptions = this.getQueryParameters();
    const queryCenter = { center:
      { lat: parseFloat(queryOptions.lat), lng: parseFloat(queryOptions.lng) }
    };
    Object.assign(mapOptions, queryCenter);
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
