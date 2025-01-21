import React from "react";
import "../css/Footer.css";
import bback from "../picture/bback.jpg"; // Import the image

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${bback})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-content">
        <h2 className="footer-logo">🍕 Kaushik Pizza</h2>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" className="social-link">
            Facebook
          </a>
          <a href="https://www.instagram.com" className="social-link">
            Instagram
          </a>
          <a href="https://www.twitter.com" className="social-link">
            Twitter
          </a>
        </div>
        <p className="copyright">© 2025 Kaushik Pizza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
