import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Connect with <a href="http://richardkwan.io/" className="portfolio-link">me</a> on</h4>
      <ul className="footer-icon-list">
        <li>
          <a href="https://github.com/taekyunggg">
            <i className="fa fa-github-alt footer-icon" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/richard-kwan">
            <i className="fa fa-linkedin-square footer-icon" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Napping">
            <i className="fa fa-facebook-official footer-icon" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
