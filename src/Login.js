// src/Login.js
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-body"> {/* <<< Add wrapper class */}
      <div className="box">
        <div className="login">
          <div className="loginBx">
            <h2><i className="fas fa-lock" ></i> Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="submit" value="Login" />
            <div className="group">
              <a href="/">Forgot Password?</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
