import React from 'react';
import { hashHistory } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.cardClick = this.cardClick.bind(this);
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

  cardClick(e) {
    const cardName = e.target.dataset.name;
    const mapCenter = { lat: null, lng: null };
    if (cardName === "hawaii") {
      mapCenter.lat = 21.307339;
      mapCenter.lng = -157.858052;
    } else if (cardName === "bora bora") {
      mapCenter.lat = -16.498331;
      mapCenter.lng = -151.741553;
    } else if (cardName === "seychelles") {
      mapCenter.lat = -4.661895;
      mapCenter.lng = 55.466595;
    } else if (cardName === "puerto rico") {
      mapCenter.lat = 18.331076;
      mapCenter.lng = -66.391754;
    } else if (cardName === "thailand") {
      mapCenter.lat = 13.590754;
      mapCenter.lng = 100.533799;
    } else if (cardName === "mexico") {
      mapCenter.lat = 21.180191;
      mapCenter.lng = -86.86492;
    } else if (cardName === "bali") {
      mapCenter.lat = -8.666619;
      mapCenter.lng = 115.259171;
    } else if (cardName === "maldives") {
      mapCenter.lat = -0.611545;
      mapCenter.lng = 73.148049;
    } else if (cardName === "fiji") {
      mapCenter.lat = -17.826763;
      mapCenter.lng = 178.058057;
    } else if (cardName === "cayman islands") {
      mapCenter.lat = 19.320751;
      mapCenter.lng = -81.237332;
    }
    this.props.updateLocation(mapCenter);
    hashHistory.push({
      pathname: '/search',
      query: {lat: mapCenter.lat, lng: mapCenter.lng}
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
                  <div
                    className="box1-card card hawaii"
                    data-name="hawaii"
                    onClick={this.cardClick} >
                    <p>Hawaii</p>
                  </div>
                </div>
                <div className="explore-box2 explore-box">
                  <div
                    className="box2-card card bora"
                    data-name="bora bora"
                    onClick={this.cardClick} >
                    <p>Bora Bora</p>
                  </div>
                  <div
                    className="box2-card card seychelles"
                    data-name="seychelles"
                    onClick={this.cardClick} >
                    <p>Seychelles</p>
                  </div>
                  <div
                    className="box2-card card puerto"
                    data-name="puerto rico"
                    onClick={this.cardClick} >
                    <p>Puerto Rico</p>
                  </div>
                  <div
                    className="box2-card card thailand"
                    data-name="thailand"
                    onClick={this.cardClick} >
                    <p>Thailand</p>
                  </div>
                </div>
              </div>
              <div className="explore-row">
                <div className="explore-box3 explore-box">
                  <div
                    className="box3-card card mexico"
                    data-name="mexico"
                    onClick={this.cardClick} >
                    <p>Cancun</p>
                  </div>
                  <div
                    className="box3-card card bali"
                    data-name="bali"
                    onClick={this.cardClick} >
                    <p>Bali</p>
                  </div>
                </div>
                <div className="explore-box4 explore-box">
                  <div
                    className="box4-card card maldives"
                    data-name="maldives"
                    onClick={this.cardClick} >
                    <p>Maldives</p>
                  </div>
                </div>
                <div className="explore-box5 explore-box">
                  <div
                    className="box5-card card fiji"
                    data-name="fiji"
                    onClick={this.cardClick} >
                    <p>Fiji</p>
                  </div>
                  <div
                    className="box5-card card cayman"
                    data-name="cayman islands"
                    onClick={this.cardClick} >
                    <p>Cayman Islands</p>
                  </div>
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
