import React from 'react';
import './Header.css';
import Chef from '../Header/Chef.png';

const Header = () => {
    return (
      <div className='Header'>
        <div className='left'>
          <img src={Chef} alt="logo"/>
        </div>
        <div className='middle'>
          <nav>
            <span>Home</span>
            <span>Courses</span>
            <span>Blog</span>
            <span>About Me</span>
            <span>Contact Me</span>
          </nav>
        </div>
        <div className='right'>
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