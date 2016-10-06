import React from 'react';

class SpotMap extends React.Component {

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: { lat: -16.498855, lng: -151.741460 },
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }
  render() {
    return <div id="map-container" ref="map"></div> ;
  }
}

export default SpotMap;
