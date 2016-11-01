import React from 'react';

const AboutModal = () => {
  return (
    <div className="about-modal">
      <h3>Welcome to beachbnb!</h3>
      <p>beachBnB is a full-stack application built by <a className="about-port" href="http://richardkwan.io/">Richard Kwan</a>.  It uses Ruby on Rails with PostgreSQL on the backend
      and React.js with Redux on the front end.  You can view the code for this site or find more information about me by following the links below!</p>
      <div className="about-links">
        <a href="https://github.com/taekyunggg/beachbnb"><i className="fa fa-github-alt" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/richard-kwan"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
    </div>
  );
};

export default AboutModal;
