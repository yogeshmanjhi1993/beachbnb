import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';
import AboutModal from '../about_modal/about_modal';
import { loginModalStyle, signupModalStyle, aboutModalStyle } from './modal_styles';
import { hashHistory } from 'react-router';
import { MONTHS } from '../../util/month_list';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      loginModalOpen: false,
      signupModalOpen: false,
      aboutModalOpen: false
    });
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.openAboutModal = this.openAboutModal.bind(this);
    this.closeAboutModal = this.closeAboutModal.bind(this);
    this.loggedInButtons = this.loggedInButtons.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.toHostForm = this.toHostForm.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-16.560867, -151.804396),
      new google.maps.LatLng(-16.434973, -151.678022)
    );

    const navSearch = document.getElementById("navbar-search");
    const options = {
      bounds: defaultBounds
    };

    const autocomplete = new google.maps.places.Autocomplete(navSearch, options);
    this.autocomplete = autocomplete;
    this.autocomplete.addListener('place_changed', this.searchSubmit);
    if (this.props.currentUser) {
      this.props.requestBookings(this.props.currentUser.id);
    }
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
    this.props.clearErrors();
  }

  openLoginModal() {
    this.setState({ loginModalOpen: true });
  }

  closeSignupModal() {
    this.setState({ signupModalOpen: false });
    this.props.clearErrors();
  }

  openSignupModal() {
    this.setState({ signupModalOpen: true });
  }

  closeAboutModal() {
    this.setState({ aboutModalOpen: false });
  }

  openAboutModal() {
    this.setState({ aboutModalOpen: true });
  }

  toBookingDetail(e) {
    hashHistory.push(`/bookings/${e.currentTarget.dataset.id}`);
  }

  loggedOutButtons(){
    return (
      <ul className='nav-buttons group'>
        <li onClick={this.toHostForm}><button className="nav-create-host">Become a Host</button></li>
        <li onClick={this.openAboutModal}><button className="nav-about">About</button></li>
        <li onClick={this.openSignupModal}><button className="nav-signup">Sign Up</button></li>
        <li onClick={this.openLoginModal}><button className="nav-login">Log In</button></li>
      </ul>
    );
  }

  loggedInButtons(currentUser) {
    const bookingsArray = Object.keys(this.props.bookings).map(key => this.props.bookings[key]);
    const trips = bookingsArray.map((booking) => {
      let start = new Date(booking.start_date);
      let end = new Date(booking.end_date);
      return (
        <li key={booking.id} onClick={this.toBookingDetail} data-id={booking.id}>
          <div>
            <p className="booking-city">
              {booking.spot.city}
            </p>
            <p className="booking-dates">
              {MONTHS[start.getMonth()]} {start.getDate()} - {MONTHS[end.getMonth()]} {end.getDate()}
            </p>
          </div>
          <img src={booking.spot.image} alt="booking image" className="booking-dropdown-image" />
        </li>
      );
    });

    return (
      <ul className='nav-buttons group'>
        <li onClick={this.toHostForm}><button className="nav-create-host">Become a Host</button></li>
        <li className="nav-trips" id="nav-trips-li">
          <button>Trips</button>
          <ul className="trips-dropdown">
            {trips}
          </ul>
        </li>
        <li onClick={this.openAboutModal}><button className="nav-about">About</button></li>
        <li className="nav-user-info" id="nav-user-prof">
          <button>{currentUser.fname}</button>
          <img src={currentUser.image} className='nav-profile-pic' />
          <ul className="profile-dropdown">
            <li onClick={this.handleLogout} className="dropdown-logout"><button className="nav-logout">Log Out</button></li>
          </ul>
        </li>
      </ul>
    );
  }

  handleLogout() {
    this.returnToHome();
    this.props.logout();
  }

  returnToHome() {
    hashHistory.push("/");
  }

  toHostForm() {
    if (this.props.currentUser) {
      hashHistory.push("/host");
    } else {
      this.props.receiveErrors(['You must be logged in to create a hosting']);
      this.openLoginModal();
    }
  }

  searchSubmit() {
    const searchLocation = this.autocomplete.getPlace().geometry.location;
    const mapCenter = {
      name: this.autocomplete.getPlace().formatted_address,
      lat: searchLocation.lat(),
      lng: searchLocation.lng()
    };

    this.props.updateLocation(mapCenter);
    hashHistory.push({
      pathname: '/search',
      query: {lat: mapCenter.lat, lng: mapCenter.lng}
    });
  }

  render() {
    const buttons = (this.props.currentUser) ?
      this.loggedInButtons(this.props.currentUser) :
      this.loggedOutButtons();

    return (
      <nav className="navbar">
        <div className='nav-logo' onClick={this.returnToHome}>

        </div>
        <form className='nav-search'>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Where to?"
            className="location-search"
            id="navbar-search"
            />
        </form>
        {buttons}

        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal}
          style={loginModalStyle}>
          <LoginFormContainer closeModal={this.closeLoginModal}/>
        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen}
          onRequestClose={this.closeSignupModal}
          style={signupModalStyle}>
          <SignupFormContainer closeModal={this.closeSignupModal} />
        </Modal>
        <Modal
          isOpen={this.state.aboutModalOpen}
          onRequestClose={this.closeAboutModal}
          style={aboutModalStyle}>
          <AboutModal />
        </Modal>
      </nav>
    );
  }
}

export default Navbar;
