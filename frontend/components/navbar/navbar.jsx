import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';

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
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
  }

  openLoginModal() {
    this.setState({ loginModalOpen: true });
  }

  closeSignupModal() {
    this.setState({ signupModalOpen: false });
  }

  openSignupModal() {
    this.setState({ signupModalOpen: true });
  }

  loggedOutButtons(){
    return (
      <ul className='nav-buttons group'>
        <li><button className="nav-create-host">Become a Host</button></li>
        <li><button className="nav-help">Help</button></li>
        <li><button className="nav-signup" onClick={this.openSignupModal}>Sign Up</button></li>
        <li><button className="nav-login" onClick={this.openLoginModal}>Log In</button></li>
      </ul>
    );
  }

  loggedInButtons(currentUser) {
    return (
      <ul className='nav-buttons group'>
        <li><button className="nav-create-host">Become a Host</button></li>
        <li><button className="nav-trips">Trips</button></li>
        <li><button className="nav-messages">Messages</button></li>
        <li><button className="nav-help">Help</button></li>
        <li className="nav-user-info">
          <button>{currentUser.fname}</button>
          <ul className="profile-dropdown">
            <li onClick={this.props.logout}><button className="nav-logout">Log Out</button></li>
          </ul>
        </li>
      </ul>
    );
  }


  render() {
    const buttons = (this.props.currentUser) ?
      this.loggedInButtons(this.props.currentUser) :
      this.loggedOutButtons();

    return (
      <nav className="navbar">
        <div className='nav-logo'>cool logo</div>
        <div className='nav-search'>search bar here</div>
        {buttons}

        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal}>
          <LoginFormContainer closeModal={this.closeLoginModal}/>
        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen}
          onRequestClose={this.closeSignupModal}>
          <SignupFormContainer closeModal={this.closeSignupModal} />
        </Modal>

      </nav>
    );
  }


}

export default Navbar;
