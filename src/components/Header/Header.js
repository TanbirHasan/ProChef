import React from 'react';
import './Header.css';
import Chef from '../Header/Chef.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Auth/firebase.init';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
      const [user] = useAuthState(auth);
    return (
      <div className="Header">
        {/* <div className="left">
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
        </div> */}

        <Navbar bg="light" expand="lg" className="w-100">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Chef} alt="chef" className="chef" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/courses" className="link">
                    Service
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/blogs" className="link">
                    Blogs
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about" className="link">
                    About
                  </Link>
                </Nav.Link>
                {user ? (
                  <span></span>
                ) : (
                  <Nav.Link>
                    <Link to="/register" className="link">
                      Register
                    </Link>
                  </Nav.Link>
                )}

                {user ? (
                  <button onClick={() => signOut(auth)}>Logout</button>
                ) : (
                  <Nav.Link>
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;