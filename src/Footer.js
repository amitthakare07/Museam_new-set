import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container py-5">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-logo">Times Gallery</h5>
            <p className="footer-text">
              A modern space to explore art, culture, and timeless creations. 
              We bring history and creativity together in one gallery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/exhibitions">Exhibitions</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/membership">Membership</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Contact</h6>
            <p className="footer-text">123 Art Street, New Delhi, India</p>
            <p className="footer-text">
              Email: <a href="mailto:info@timesgallery.com">info@timesgallery.com</a>
            </p>
            <p className="footer-text">Phone: +91 98765 43210</p>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Follow Us</h6>
            <div className="footer-social mt-3">
              <a href="https://instagram.com" className="footer-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" className="footer-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="footer-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/919876543210" className="footer-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom text-center pt-3 mt-4">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Times Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
