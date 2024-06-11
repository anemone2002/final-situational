import React from 'react';
import '../components/Footer.css'; 

const Footer = () => {
  return (
    <div className="conatiner">
        <footer className="footer">
            <div className="footer-content">
            <div className="footer-section about">
                <h2>About Us</h2>
                <p>We are committed to delivering the best tech solutions to help you elevate your brand and products to the next level.</p>
            </div>
            <div className="footer-section address">
                <h2>Our Address</h2>
                <p>123 Acme Corp Lane</p>
                <p>Innovation City, Techland</p>
            </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer;