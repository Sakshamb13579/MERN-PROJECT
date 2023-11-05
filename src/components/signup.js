import React from 'react';
import './signup.css';
class signup extends React.Component {
  render() {
    return (
      <div className="box">
        <form autoComplete="off">
          <a href="index.html" style={{ textDecoration: 'none', fontSize: '20px' }}>Personal Finance Tracker</a>
          <h3>Sign up</h3>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Userame</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Mobile no.</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="email" required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Confirm Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="login.html">Already registered? Sign in</a>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default signup;
