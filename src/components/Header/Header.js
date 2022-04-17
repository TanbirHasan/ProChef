import React from 'react';
import './Header.css';
import Chef from '../Header/Chef.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="Header">
        <div className="left">
          <img src={Chef} alt="logo" />
        </div>
        <div className="middle">
          <nav>
            <Link to="/" className="link">
              <span>Home</span>
            </Link>
            <Link to="/courses" className="link">
              <span>Courses</span>
            </Link>
            <Link to="/blogs" className="link">
              <span>Blog</span>
            </Link>
            <Link to="/about" className="link">
              <span>About Me</span>
            </Link>
            <Link to="/contact" className="link">
              <span>Contact Me</span>
            </Link>
            <Link to="/login" className="link">
              <span>Login</span>
            </Link>
            <Link to="/register" className="link">
              <span>Register</span>
            </Link>
          </nav>
        </div>
        <div className="right">
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span>
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
    );
};

export default Header;