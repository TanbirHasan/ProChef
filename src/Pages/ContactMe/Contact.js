import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Contact.css";

const Contact = () => {
    return (
      <div>
        <Header />
        <div className="contactform mx-auto mt-5 mb-5 p-3 w-50 d-flex justify-content-center align-items-center rounded">
          <form className="d-flex flex-column align-items-center p-5">
            <label>Your Name</label>
            <input type="text" className="w-100" />
            <label>Your Email</label>
            <input type="email" className="w-100" />
            <label>Write your message</label>
            <textarea rows="4" cols="30" className="mb-3"></textarea>
            <Button className="contactbtn">Submit</Button>
          </form>
        </div>
        <Footer />
      </div>
    );
};

export default Contact;