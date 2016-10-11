import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this._registerListeners = this._registerListeners.bind(this);
  }

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
      zoom: 12
    };
    const newCenter = { center:
      { lat: this.props.location.lat, lng: this.props.location.lng }
    };
    Object.assign(mapOptions, newCenter);
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    const newCenter = { lat: this.props.location.lat, lng: this.props.location.lng };
    this.map.setCenter(newCenter);
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      const center = { lat: this.map.center.lat(), lng: this.map.center.lng() };
      this.props.updateLocation(center);
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {
    return <div id="map-container" ref="map"></div> ;
  }
}

export default SpotMap;
