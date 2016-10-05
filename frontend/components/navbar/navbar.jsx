import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../login_form/login_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ modalOpen: false});
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loggedInButtons = this.loggedInButtons.bind(this);

  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  loggedOutButtons(){
    return (
      <ul className='nav-buttons group'>
        <li><button className="nav-create-host">Become a Host</button></li>
        <li><button className="nav-help">Help</button></li>
        <li><button className="nav-signup">Sign Up</button></li>
        <li><button className="nav-login" onClick={this.openModal}>Log In</button></li>
      </ul>
    );
  }


  loggedInButtons() {
    return (
      <ul className='nav-buttons group'>
        <li><button className="nav-create-host">Become a Host</button></li>
        <li><button className="nav-trips">Trips</button></li>
        <li><button className="nav-messages">Messages</button></li>
        <li><button className="nav-help">Help</button></li>
        <li><button className="nav-user-info">{this.currentUser.fname}</button></li>
      </ul>
    );
  }


  render() {
    const buttons = (this.currentUser) ?
      <LoggedInButtons currentUser={this.currentUser} /> :
      this.loggedOutButtons();

    return (
      <nav className="navbar">
        <div className='nav-logo'>logo goes here</div>
        <div className='nav-search'>search bar here</div>
        {buttons}

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <LoginFormContainer />
        </Modal>
      </nav>
    );
  }


}

export default Navbar;
