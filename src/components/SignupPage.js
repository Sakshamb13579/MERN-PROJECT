import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';
import Header from './Header';
import Footer from './Footer';

function SignupPage() {
  const headerLinks = [
    { url: '/', text: 'Home' },
    { url: '/login', text: 'Login' },
    { url: '/about', text: 'About' },
    { url: '/contact', text: 'Contact' }
  ];
  return (
    <div className="signup-page">
      <Header links={headerLinks} />

      <div className="signup-box">
        <form className="signup-form" autoComplete="off">
          <h3 className="signup-main-head">Sign up</h3>
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
            <Link to="/login">Already registered? Sign in</Link>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <Footer />
    </div>
  );
}


export default SignupPage;
