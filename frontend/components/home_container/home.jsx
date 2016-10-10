import React from 'react';
import { hashHistory } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);

  }

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-16.560867, -151.804396),
      new google.maps.LatLng(-16.434973, -151.678022)
    );

    const homeSearch = document.getElementById("homepage-search");
    const options = {
      bounds: defaultBounds
    };

    const autocomplete = new google.maps.places.Autocomplete(homeSearch, options);
    this.autocomplete = autocomplete;
  }



  searchSubmit(e) {
    e.preventDefault();
    const searchLocation = this.autocomplete.getPlace().geometry.location;
    const mapCenter = { lat: searchLocation.lat(),
                        lng: searchLocation.lng() };
    hashHistory.push({
      pathname: '/search',
      query: mapCenter
    });
  }

  render() {
    return (
      <main className="home-page">
        <heading className="heading-box">
          <h1 className="main-heading">Live There</h1>
          <h3 className="heading-sentence">
            Book homes from local hosts and experience a place like you live there
          </h3>
        </heading>
        <div className="home-search-listings">
          <h2 className="search-heading">
            Search over 2 million homes in over 190 countries
          </h2>
          <form onSubmit={this.searchSubmit} >
            <input
              type="text"
              placeholder="Where to?"
              className="home-search"
              id="homepage-search"
              />
          </form>
        </div>
      </main>
    );
  }
}

export default Home;
