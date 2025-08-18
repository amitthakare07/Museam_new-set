import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Membership.css";
import { FaUserGraduate, FaUsers, FaCrown } from "react-icons/fa";
import bg from "./new-normal-museums_23-2148575036.avif";
import axios from "axios";


function Membership() {

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [membershiptype, setMembershipType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/membership", {
        fullname,
        email,
        membershiptype,
        message
      });

      alert(response.data.message || "Message sent successfully");


      setFullName('');
      setEmail('');
      setMembershipType('');
      setMessage('');

    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };



  return (
    <div className="membership-page">
      <div className="membership-hero" style={{ backgroundImage: `url(${bg}) ` }}>
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

      <div className="container-fluid" style={{backgroundColor: "#F8F8F8", width: "2600px"}}>
      <div className="membership-form-section fade-slide" style={{ width: "600px", marginTop: "0px" ,marginLeft: "350px", paddingTop: "10px", borderRadius: "15px", backgroundColor: "white"}}>
        <h2 className="section-heading">Join Us Today</h2>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Membership Type</Form.Label>
            <Form.Control
              type="text"
              name="membershiptype"
              value={membershiptype}
              onChange={(e) => setMembershipType(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100" style={{ marginTop: "20px" , padding: "15px"}}>
            Join Now
          </Button>
        </Form>
      </div>
     </div>
    </div>
   
  );
}

export default Membership;
