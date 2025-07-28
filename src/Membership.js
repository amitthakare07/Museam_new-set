import React from "react";
import "./Membership.css";
import { FaUserGraduate, FaUsers, FaCrown } from "react-icons/fa";
import bg from "./new-normal-museums_23-2148575036.avif";

function Membership() {
  return (
    <div className="membership-page">
      <div className="membership-hero" style={{ backgroundImage: `url(${bg})` }}>
        <svg className="hero-shape" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffd700" opacity="0.2" d="M44.8,-50.6C58.5,-37.6,70,-19.5,69.4,-2.2C68.7,15.1,55.9,30.2,42.2,45.6C28.5,61,14.2,76.7,-1.6,78.3C-17.4,80,-34.9,67.6,-50.6,52.4C-66.4,37.3,-80.4,19.6,-80.1,1.3C-79.8,-17,-65.3,-34,-49.4,-47.6C-33.5,-61.3,-16.8,-71.7,0.4,-72C17.7,-72.2,35.4,-62.5,44.8,-50.6Z" transform="translate(100 100)" />
        </svg>
        <div className="membership-hero-overlay">
          <h1 className="hero-title">Museum Membership</h1>
          <p className="hero-subtext">
            Unlock exclusive experiences, events, and year-round benefits.
          </p>
        </div>
      </div>

      <div className="membership-tier-section">
        <h2 className="section-heading">Choose Your Membership</h2>
        <div className="membership-cards-grid">
          <div className="membership-card gold" data-badge="Popular">
            <FaUserGraduate className="icon" />
            <h3>Student Pass</h3>
            <p className="price">₹499 / year</p>
            <ul>
              <li>Free unlimited visits</li>
              <li>10% museum shop discount</li>
              <li>Access to student lounges</li>
            </ul>
          </div>

          <div className="membership-card emerald" data-badge="Best Value">
            <FaUsers className="icon" />
            <h3>Family Plan</h3>
            <p className="price">₹1499 / year</p>
            <ul>
              <li>Entry for up to 5 members</li>
              <li>Priority access to exhibitions</li>
              <li>Kids’ educational workshops</li>
            </ul>
          </div>

          <div className="membership-card royal" data-badge="All Access">
            <FaCrown className="icon" />
            <h3>Premium Member</h3>
            <p className="price">₹2999 / year</p>
            <ul>
              <li>Private guided tours</li>
              <li>Exclusive early exhibition previews</li>
              <li>Includes all family benefits</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="membership-form-section fade-slide">
        <h2 className="section-heading">Join Us Today</h2>
        <form
          className="membership-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for joining! Welcome to the museum family.");
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Membership Type</option>
            <option value="student">Student Pass</option>
            <option value="family">Family Plan</option>
            <option value="premium">Premium Member</option>
          </select>
          <textarea
            rows="4"
            placeholder="Tell us what you're excited to see at the museum! (optional)"
          ></textarea>
          <button type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Membership;
