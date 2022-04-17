import { Button } from 'react-bootstrap';
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./Checkout.css"

const Checkout = () => {
    return (
      <div>
        <Header />
        <div className="checkout">
          <div className="FormWrapper">
            <form>
              <label>Enter Your Name</label>
              <input type="text " />
              <label>Enter Your Email</label>
              <input type="email " />
              <label>Enter Your Shipping Address</label>
              <input type="text " />
              <label>Enter Your Mobile number</label>
              <input type="text " />
              <Button>Submit</Button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default Checkout;