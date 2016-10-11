import React from 'react';
import { hashHistory } from 'react-router';
import countryList from '../../util/country_list';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street_number: "",
      route: "",
      locality: "",
      country: "",
      lat: 0,
      lng: 0
    };
    this.preFillFields = this.preFillFields.bind(this);
    this.locationSubmit = this.locationSubmit.bind(this);
  }

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-16.560867, -151.804396),
      new google.maps.LatLng(-16.434973, -151.678022)
    );

    const addressSearch = document.getElementById("address-search");
    const options = {
      bounds: defaultBounds,
      types: ["geocode"]
    };

    const autocomplete = new google.maps.places.Autocomplete(addressSearch, options);
    this.autocomplete = autocomplete;
    this.autocomplete.addListener('place_changed', this.preFillFields);
  }

  preFillFields() {
    const place = this.autocomplete.getPlace();
    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (Object.keys(this.state).includes(addressType)) {
        this.setState({[addressType]: place.address_components[i].long_name});
      }
    }
    this.setState({lat: place.geometry.location.lat()});
    this.setState({lng: place.geometry.location.lng()});
  }

  locationSubmit(e) {
    e.preventDefault();
    this.props.updateField("address", `${this.state.street_number} ${this.state.route}`);
    this.props.updateField("country", this.state.country);
    this.props.updateField("city", this.state.locality);
    this.props.updateField("lat", this.state.lat);
    this.props.updateField("lng", this.state.lng);
    hashHistory.push("/description");
  }

  render() {
    return (
      <form className="location-form" onSubmit={this.locationSubmit}>
        <h2>Where's your place located?</h2>
        <h4>Street Address</h4>
        <input type="text" id="address-search" placeholder="e.g. 123 Main St." />
        <h4>City</h4>
        <input type="text" className="location-input" placeholder="e.g. New York" value={this.state.locality}/>
        <h4>Country</h4>
        <input type="text" className="country-input" placeholder="e.g. United States" value={this.state.country} />
        <input type="submit" value="next" />
      </form>
    );
  }
}

export default LocationForm;
