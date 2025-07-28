import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="gold-login-page">
      <div className="gold-overlay"></div>
      <div className="gold-login-container">
        <div className="gold-login-card shadow-lg">
          <h2 className="text-center mb-4">Welcome Back</h2>
          <form>
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mb-4">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn gold-btn w-100 mb-3">Login</button>
            <div className="text-center">
              <small>Forgot password? <a href="#">Click here</a></small><br />
              <small>New user? <a href="#">Create account</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
