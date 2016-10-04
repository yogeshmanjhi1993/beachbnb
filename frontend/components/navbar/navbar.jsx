import React from 'react';

const LoggedOutButtons = () => (
  <ul className='nav-buttons group'>
    <li><button className="nav-create-host">Become a Host</button></li>
    <li><button className="nav-help">Help</button></li>
    <li><button className="nav-signup">Sign Up</button></li>
    <li><button className="nav-login">Log In</button></li>
  </ul>
);


const LoggedInButtons = ({ currentUser }) => (
  <ul className='nav-buttons group'>
    <li><button className="nav-create-host">Become a Host</button></li>
    <li><button className="nav-trips">Trips</button></li>
    <li><button className="nav-messages">Messages</button></li>
    <li><button className="nav-help">Help</button></li>
    <li><button className="nav-user-info">{currentUser.fname}</button></li>
  </ul>
);

const Navbar = ({ currentUser, logout }) => {
  const buttons = (currentUser) ?
    <LoggedInButtons currentUser={currentUser} /> :
    <LoggedOutButtons />;

  return (
    <nav className="navbar group">
      <div className='nav-logo'>logo goes here</div>
      <div className='nav-search'>search bar here</div>
      {buttons}
    </nav>
  );
};

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//
//   }
//
//   getInitialState() {
//
//   }
// }

export default Navbar;
