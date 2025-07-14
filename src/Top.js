import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './img2.jpg';

function Top() {
  return (
    <>
      <div className="image-container">
        <img src={LogoImage} alt="Sample" className="background-image" />
        <div className="overlay-text">
          CONTACT US<br />Find The Right Contact Details
        </div>
      </div>

      <div className="card">
        Don't hesitate to check our 
        <Link to="/Cont" className="inline-link"><strong> Help Center</strong></Link> 
        for answers to frequently asked questions.
      </div>

      <div className="contact-grid">
        {/* General Information */}
        <div className="label">General Information</div>
        <div className="info">
          <p>
            For general questions, requests for information or to send us feedback, please fill out
            <Link to="/SubmitRequest" className="inline-link"><strong> the form</strong></Link>.
          </p>
          <p><strong>Call us on:</strong> +33 (0)1 40 20 53 17</p>
          <p>During museum opening hours (closed on July 25 and 26, 2024).</p>
        </div>

        {/* Online Ticketing */}
        <div className="label">Online Ticketing Service</div>
        <div className="info">
          <p>
            For questions regarding online reservations, please fill out
            <Link to="/SubmitRequest" className="inline-link"><strong> the form</strong></Link>.
          </p>
        </div>

        {/* Accessibility */}
        <div className="label">Visitors with Disabilities</div>
        <div className="info">
          <p>
            <strong>For questions regarding disabled access, call:</strong> +33 (0)1 40 20 59 90
          </p>
          <p>Leave a message and we will get back to you as soon as possible.</p>
          <p>Please fill out the
            <Link to="/SubmitRequest" className="inline-link"><strong> form</strong></Link>.
          </p>
        </div>
      </div>
    </>
  );
}

export default Top;
