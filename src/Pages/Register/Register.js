import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./Register.css"

import {
  useCreateUserWithEmailAndPassword, useUpdateProfile,
 
} from "react-firebase-hooks/auth";
import auth from "../../Auth/firebase.init"
import Sociallogin from "../../components/SocialLogin/Sociallogin"
import { Link } from 'react-router-dom';



const Register = () => {

  const [agree,setAgree] = useState(false)

 



   const [createUserWithEmailAndPassword,user,error] =
     useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});

     const [updateProfile,updating,updateerror] = useUpdateProfile(auth)

   if (user) {
     console.log(user);
   }

   const nameref = useRef(" ");
   const emailref = useRef(" ");
   const passref = useRef(" ");

   const handleSubmit = async (e) => {
     e.preventDefault();
     const name = nameref.current.value;
     const email = emailref.current.value;
     const password = passref.current.value;
     const agree = e.target.terms.checked;
     if(agree){
           await createUserWithEmailAndPassword(email, password);
           await updateProfile({ displayName: name });
           console.log("Updated profile");

     }

     console.log(email);
     console.log(password);


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
                <Form.Check
                  type="checkbox" onClick={() => setAgree(!agree)} name="terms" id="terms"
                  label="Accept Terms and Conditions" className={agree ? 'text-primary' : 'text-dark'}
                />
              </Form.Group>
              <Button variant="primary" disabled={!agree} type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <p className='text-center'>
          Already have an Account?Please{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>

        <span className="error" style={{ color: "red", fontWeight: "500" }}>
          {error}
        </span>

        <div className="react-boot-form"></div>

        <Footer />
      </div>
    );
};

export default Register;