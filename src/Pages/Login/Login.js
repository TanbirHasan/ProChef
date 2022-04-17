import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Login.css";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../Auth/firebase.init';

const Login = () => {

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailref = useRef();
  const passref = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passref.current.value;

    signInWithEmailAndPassword(email, password);
  };
    return (
      <div>
        <Header />
        <div className="FormWrapper">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input placeholder="Enter your Email" ref={emailref} required />
              <input placeholder="Enter your Password" ref={passref} required />

              <Button type="submit" className="button">Register</Button>
            </form>
          </div>
          <div className="image">
            <img
              src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/national-fast-food-day.jpg"
              alt="food"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Login;