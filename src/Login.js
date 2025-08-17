import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password
      });
      console.log('Response:', response.data);
      alert('Login/Register Successful');
    } catch (error) {
      console.error('Error:', error);
      alert('Login/Register Failed');
    }
  };

  return (
    <div className="gold-login-page fade-slide">
      <div className="gold-overlay"></div>
      <div className="gold-login-container">
        <div className="gold-login-card shadow-lg">
          <h2 className="text-center mb-4">Welcome Back</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="form-group mb-4">
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
            <button type="submit" className="btn gold-btn w-100 mb-3">Login</button>
            <div className="text-center">
              <small>Forgot password? <a href="#">Click here</a></small><br />
              <small>New user? <a href="signup">Create account</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
