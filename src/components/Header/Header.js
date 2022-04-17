import React from 'react';
import './Header.css';
import Chef from '../Header/Chef.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Auth/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
      const [user] = useAuthState(auth);
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
            {user ? (
              <span></span>
            ) : (
              <Link to="/register" className="link">
                <span>Register</span>
              </Link>
            )}

       
            {user ? (
              <button onClick={() => signOut(auth)}>Logout</button>
            ) : (
              <Link to="/login" className="link">
                <span>Login</span>
              </Link>
            )}
          </nav>
        </div>
        <div className="right">
          {user ? (
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
          ) : (
            <i></i>
          )}
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
      </div>
    );
};

export default Header;