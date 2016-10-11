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
    if (this.autocomplete.getPlace()) {
      const searchLocation = this.autocomplete.getPlace().geometry.location;
      const mapCenter = {
        name: this.autocomplete.getPlace().formatted_address,
        lat: searchLocation.lat(),
        lng: searchLocation.lng()
      };
      this.props.updateLocation(mapCenter);
      hashHistory.push({
        pathname: '/search'
      });
    }
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
        <div className="home-body">
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
          <div className="explore-world" >
            <h3>Explore the world</h3>
            <div className="explore-items">
              <div className="explore-row">
                <div className="explore-box1 explore-box">
                  <div className="box1-card card hawaii"><p>Hawaii</p></div>
                </div>
                <div className="explore-box2 explore-box">
                  <div className="box2-card card bora"><p>Bora Bora</p></div>
                  <div className="box2-card card seychelles"><p>Seychelles</p></div>
                  <div className="box2-card card puerto"><p>Puerto Rico</p></div>
                  <div className="box2-card card thailand"><p>Thailand</p></div>
                </div>
              </div>
              <div className="explore-row">
                <div className="explore-box3 explore-box">
                  <div className="box3-card card mexico"><p>Mexico</p></div>
                  <div className="box3-card card bali"><p>Bali</p></div>
                </div>
                <div className="explore-box4 explore-box">
                  <div className="box4-card card maldives"><p>Maldives</p></div>
                </div>
                <div className="explore-box5 explore-box">
                  <div className="box5-card card fiji"><p>Fiji</p></div>
                  <div className="box5-card card cayman"><p>Cayman Islands</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
