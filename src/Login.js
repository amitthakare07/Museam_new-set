import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('🎉 Login Successful! Welcome back.');
      navigate('/');
    }, 1000); // simulate delay for effect
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
            <button type="submit" className="btn gold-btn w-100 mb-3" disabled={loading}>
              {loading ? 'Processing...' : 'Login'}
            </button>
            <div className="text-center">
              <small>Forgot password? <a href="#">Click here</a></small><br />
              <small>New user? <a href="/signup">Create account</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
