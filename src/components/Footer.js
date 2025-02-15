import React from 'react';
import './Footer.css';
import socialData from '../json/social.json';

function Footer() {
  const handleContactClick = () => {
    window.location.href = 'mailto:swimming@charlotte.edu';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <img 
            src="/assets/branding/All-in-C.png" 
            alt="UNCC Logo" 
            className="footer-logo"
          />
        </div>
        <button onClick={handleContactClick} className="contact-button">
          Contact Us
        </button>
        <div className="social-links">
          {socialData.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label={social.platform}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div className="copyright">
          {socialData.copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
