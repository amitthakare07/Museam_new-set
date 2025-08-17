import React, { useState } from 'react';
import './Login.css'; // same CSS reuse hoga
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });
      console.log('Response:', response.data);
      alert('Signup Successful');
    } catch (error) {
      console.error('Error:', error);
      alert('Signup Failed');
    }
  };

  return (
    <div className="gold-login-page fade-slide">
      <div className="gold-overlay"></div>
      <div className="gold-login-container">
        <div className="gold-login-card shadow-lg">
          <h2 className="text-center mb-4">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn gold-btn w-100 mb-3">
              Sign Up
            </button>
            <div className="text-center">
              <small>Already have an account? <a href="/login">Login</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
