// export default SubmitRequest;
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
// import "./DashContact.css";
import axios from "axios";

function ContactUsPage() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setmessage] = useState('');


  // Mam given code📄
  
  const fetchUserdata = async () =>{
    try {
        const response = await axios.get('http://localhost:8000/contactfind');
        console.log('test',response);
        const userData = response.data.userData;

        setName(userData.name || '');
        setEmail(userData.email || '');
         setSubject(userData.subject || '');
        setmessage(userData.message || '');
    }
    catch (err) {
        console.error('Error fetching user data:', err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8000/contact", {
      name,
      email,
      subject,
      message
    });

    alert(response.data.message || "Message sent successfully");
    
    
    setName('');
    setEmail('');
     setSubject('');
    setmessage('');
    
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message");
  }
};

  return (
    <div className="contact-us-page">
      <Container className="py-5">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 fw-bold"
        >
          Contact Us  ☎
        </motion.h2>
        <Row className="g-4">
          {/* Contact Form */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-4 shadow-lg border-0">
                <h4 className="mb-3">Get in Touch</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />  
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-4 shadow-lg border-0 contact-info">
                <h4 className="mb-3">Contact Information</h4>
                <p><strong>Email:</strong> virtualcampuss53@gmail.com</p>
                <p><strong>Phone:</strong> +91 8669921093</p>
                <p><strong>Address:</strong> Virtual Campus, India</p>
                <div className="social-links mt-3">
                  <Button variant="outline-primary" className="me-2">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button variant="outline-info" className="me-2">
                    <i className="bi bi-twitter"></i>
                  </Button>
                  <Button variant="outline-danger">
                    <i className="bi bi-instagram"></i>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUsPage;