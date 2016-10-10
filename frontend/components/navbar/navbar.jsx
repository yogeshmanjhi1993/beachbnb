import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';
import { loginModalStyle, signupModalStyle } from './modal_styles';
import { hashHistory } from 'react-router';



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      loginModalOpen: false,
      signupModalOpen: false
    });
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
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

  loggedOutButtons(){
    return (
      <ul className='nav-buttons group'>
        <li onClick={this.toHostForm}><button className="nav-create-host">Become a Host</button></li>
        <li><button className="nav-help">Help</button></li>
        <li onClick={this.openSignupModal}><button className="nav-signup">Sign Up</button></li>
        <li onClick={this.openLoginModal}><button className="nav-login">Log In</button></li>
      </ul>
    );
  }

  loggedInButtons(currentUser) {
    return (
      <ul className='nav-buttons group'>
        <li onClick={this.toHostForm}><button className="nav-create-host">Become a Host</button></li>
        <li><button className="nav-trips">Trips</button></li>
        <li><button className="nav-messages">Messages</button></li>
        <li><button className="nav-help">Help</button></li>
        <li className="nav-user-info">
          <button>{currentUser.fname}</button>
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
      this.openLoginModal();
      this.toHostForm();
    }
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
    const buttons = (this.props.currentUser) ?
      this.loggedInButtons(this.props.currentUser) :
      this.loggedOutButtons();

    return (
      <nav className="navbar">
        <div className='nav-logo' onClick={this.returnToHome}>
          <i className="fa fa-paper-plane-o" aria-hidden="true"></i> beachbnb
        </div>
        <form className='nav-search' onSubmit={this.searchSubmit}>
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
      </nav>
    );
  }
}

export default Navbar;
