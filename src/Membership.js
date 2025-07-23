import React from "react";
import "./Membership.css";
import { FaUserGraduate, FaUsers, FaCrown } from "react-icons/fa";
import bg from "./new-normal-museums_23-2148575036.avif";

function Membership() {
  return (
    <div className="membership-page">
      <div className="membership-hero" style={{ backgroundImage: `url(${bg})` }}>
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
          <div className="membership-card gold">
            <FaUserGraduate className="icon" />
            <h3>Student Pass</h3>
            <p className="price">₹499 / year</p>
            <ul>
              <li>Free unlimited visits</li>
              <li>10% museum shop discount</li>
              <li>Access to student lounges</li>
            </ul>
          </div>

          <div className="membership-card emerald">
            <FaUsers className="icon" />
            <h3>Family Plan</h3>
            <p className="price">₹1499 / year</p>
            <ul>
              <li>Entry for up to 5 members</li>
              <li>Priority access to exhibitions</li>
              <li>Kids’ educational workshops</li>
            </ul>
          </div>

          <div className="membership-card royal">
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

      <div className="membership-form-section">
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
