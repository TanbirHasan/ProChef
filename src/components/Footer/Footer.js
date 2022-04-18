import React from 'react';
import './Footer.css';
import Chef from '../Footer/Chef.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="Footer">
        <div className="left-side">
          <img src={Chef} alt="logo" />
          <h3>Chef Tom</h3>
          <p>Your Cooking instructor is here.You have any query PLease 
            <Link to="/contact" className='link'>Contact Me</Link>
          </p>
        </div>
        <div className="middle-side">
          <ul>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/blogs" className="link">
              Blogs
            </Link>
            <Link to="/course" className="link">
              Service
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
          </ul>
        </div>
        <div className="right-side">
          <h3>Follow Me</h3>
          <ul>
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i class="fa-brands fa-google-plus-square"></i>
            </span>
          </ul>
        </div>
      </div>
    );
};

export default Footer;