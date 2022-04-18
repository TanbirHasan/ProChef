import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Login.css";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../Auth/firebase.init';
import Sociallogin from "../../components/SocialLogin/Sociallogin";

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
        <Sociallogin />
        <div className="d-flex justify-content-center">
          <div className="w-50 mt-5">
            <Form
              className="w-50 mx-auto"
              style={{
                background: "#CB4335",
                padding: "30px",
                marginBottom: "30px",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailref}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passref}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Login;