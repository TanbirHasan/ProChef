import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Login.css";

const Login = () => {
    return (
      <div>
        <Header />
        <div className="FormWrapper">
          <div className="form">
            <form>
              <input placeholder="Enter your Email" required />
              <input placeholder="Enter your Password" required />

              <Button className="button">Register</Button>
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