import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">
            © {currentYear} SYNC HRMS. All rights reserved.
          </p>
        </div>
        
        <div className="footer-right">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/support" className="footer-link">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
