import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Auth/firebase.init"


const Register = () => {


   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub] = useSignInWithGithub(auth);

   const [createUserWithEmailAndPassword] =
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
        <div className='socialbutton'>
          

        </div>
        <Button>Google Sign In</Button>
        <Button>Github Sign In</Button>
        <div className="FormWrapper">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input placeholder="Enter your name" ref={nameref} />
              <input placeholder="Enter your Email" ref={emailref} required />
              <input placeholder="Enter your Password" ref={passref} required />

              <Button type="submit">Register</Button>
            </form>
          </div>
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/chinese-food-blank-background-picture-id545286388?b=1&k=20&m=545286388&s=170667a&w=0&h=NBSXjfSVP0GdwAOBYELxOFwoYZAXYya1HTGUJYBkh8I="
              alt="food"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Register;