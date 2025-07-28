import React from 'react';
import './OnlineTicketingService.css';

const OnlineTicketingService = () => {
  return (
    <div className="page-container">
      <div className="ticketing-card">
        <h2 className="main-heading">ONLINE TICKETING SERVICE<hr/></h2>

        <h3 className="section-heading"><strong>BUYING ONLINE TICKETS</strong></h3>
        <ul className="question-list">
          <li>1. How do I buy a ticket online?</li>
          <li>Ans: Visit the museum's official website, select your visit date, and complete the payment to get your e-ticket.</li><br/>
          <li>2. How to create an account?</li>
          <li>Ans: Click on the "Sign Up" button on the website and fill in your name, email, and password to register.</li><br/>
          <li>3. What kind of tickets/ services can I book online?</li>
          <li>Ans: You can book general admission tickets, guided tours, and special exhibition tickets through the online portal.</li><br/>
          <li>4. How do I change my order?</li>
          <li>Ans: Log in to your account, go to 'My Orders', and request a change or contact customer support for assistance.</li><br/>
          <li>5. How do I pay?</li>
          <li>Ans: You can pay online using debit/credit cards, PayPal, or other secure payment methods accepted by the website.</li><br/>
        </ul>
      </div>
    </div>
  );
};

export default OnlineTicketingService;