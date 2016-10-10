import React from 'react';

class WelcomeForm extends React.Component {

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-16.560867, -151.804396),
      new google.maps.LatLng(-16.434973, -151.678022)
    );

    const formSearch = document.getElementById("form-search-input");
    const options = {
      bounds: defaultBounds
    };

    const autocomplete = new google.maps.places.Autocomplete(formSearch, options);
    this.autocomplete = autocomplete;
  }

  render() {
    return (
      <div className="host-form">
        <div className="host-form-half">
          <p className="host-form-first-heading">
            Hi {this.props.currentUser.fname}! Let's get you ready to become a host.
          </p>
          <p>STEP 1</p>
          <p>What kind of place do you have?</p>
          <form>
            <select name="roomtype" className="spot-form-input form-dropdown">
              <option value="whole">Entire home/apt</option>
              <option value="private">Private room</option>
              <option value="shared">Shared room</option>
            </select>
            <select name="num-guests" className="spot-form-input form-dropdown">
              <option value={1}>for 1 guest</option>
              <option value={2}>for 2 guests</option>
              <option value={3}>for 3 guests</option>
              <option value={4}>for 4 guests</option>
              <option value={5}>for 5 guests</option>
              <option value={6}>for 6 guests</option>
              <option value={7}>for 7 guests</option>
              <option value={8}>for 8 guests</option>
              <option value={9}>for 9 guests</option>
              <option value={10}>for 10 guests</option>
              <option value={11}>for 11 guests</option>
              <option value={12}>for 12 guests</option>
              <option value={13}>for 13 guests</option>
              <option value={14}>for 14 guests</option>
              <option value={15}>for 15 guests</option>
              <option value={16}>for 16 guests</option>
            </select>
            <br />
            <input
              type="text"
              className="form-search spot-form-input"
              id="form-search-input"
              placeholder="e.g. New York City" />
          </form>
        </div>
        <div className="host-form-image">

        </div>
      </div>
    );
  }
}

export default WelcomeForm;
