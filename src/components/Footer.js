import React from "react";
import "../css/Footer.css";
import bback from "../picture/bback.jpg"; // Background image import

const Footer = ({ onLinkClick }) => {
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
          <span className="footer-link" onClick={() => onLinkClick(<PrivacyPolicy />)}>
            Privacy Policy
          </span>
          <span className="footer-link" onClick={() => onLinkClick(<TermsOfService />)}>
            Terms of Service
          </span>
          <span className="footer-link" onClick={() => onLinkClick(<ContactUs />)}>
            Contact Us
          </span>
        </div>
        <div className="social-media">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917464020301"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* Call */}
          <a href="tel:+917464020301" className="social-link" aria-label="Call">
            <i className="fas fa-phone-alt"></i>
          </a>
         
          <a
            href="https://www.facebook.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Kaushik Pizza. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Placeholder components for modal content
const PrivacyPolicy = () => (
  <div>
    <h1>Privacy Policy</h1>
    <p>
      At Kaushik Pizza, we value your privacy. Any data you provide will be securely stored and used only for improving
      our services. Your personal information will never be shared with third parties without your consent.
    </p>
  </div>
);

const TermsOfService = () => (
  <div>
    <h1>Terms of Service</h1>
    <p>
      Welcome to Kaushik Pizza! By using our website, you agree to follow our policies, including proper usage of our
      services, respecting intellectual property, and adhering to all applicable laws.
    </p>
  </div>
);

const ContactUs = () => (
  <div>
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Feel free to reach out with any questions or feedback at:</p>
    <ul>
      <li>Email: support@kaushikpizza.com</li>
      <li>Phone: +91 7464020301</li>
      <li>Bellandur, Bangalore, Karnataka, PIN: 560103</li>
    </ul>
  </div>
);

export default Footer;
