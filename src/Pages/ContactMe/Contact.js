import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Contact.css";

const Contact = () => {
    return (
      <div>
        <Header />
        <div>
          <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Your Email</label>
            <input type="email" />
            <label>Write your message</label>
            <textarea rows="4" cols="30"></textarea>
            <Button>Submit</Button>
          </form>
        </div>
        <Footer />
      </div>
    );
};

export default Contact;