import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./Register.css"

import {
  useCreateUserWithEmailAndPassword,
 
} from "react-firebase-hooks/auth";
import auth from "../../Auth/firebase.init"
import Sociallogin from "../../components/SocialLogin/Sociallogin"



const Register = () => {

 



   const [createUserWithEmailAndPassword,user,error] =
     useCreateUserWithEmailAndPassword(auth);

   if (user) {
     console.log(user);
   }

   const nameref = useRef(" ");
   const emailref = useRef(" ");
   const passref = useRef(" ");

   const handleSubmit = (e) => {
     e.preventDefault();
     const Name = nameref.current.value;
     const email = emailref.current.value;
     const password = passref.current.value;

     console.log(email);
     console.log(password);

     createUserWithEmailAndPassword(email, password);
   };
    return (
      <div>
        <Header />
        <Sociallogin />

        <div className="d-flex justify-content-center">
          <div className="w-50">
            <Form
              className="w-100 mx-auto"
              style={{
                background: "#CB4335",
                padding: "30px",
                marginBottom: "30px",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Full-Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameref}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailref}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passref}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>

        <span className="error" style={{ color: "red", fontWeight: "500" }}>
          {error}
        </span>

        <div className="react-boot-form"></div>

        <Footer />
      </div>
    );
};

export default Register;