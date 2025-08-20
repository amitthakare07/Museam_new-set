import React, { useState } from 'react';
import './Login.css'; // Reusing same CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:000/signup', {
        name,
        email,
        password,
      });

      console.log('Response:', response.data);
      alert(response.data.message || 'Signup Successful');

      // Optionally redirect to login page after signup
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Signup Failed');
    } finally {
      setLoading(false);
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
            <button type="submit" className="btn gold-btn w-100 mb-3" disabled={loading}>
              {loading ? 'Processing...' : 'Sign Up'}
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
