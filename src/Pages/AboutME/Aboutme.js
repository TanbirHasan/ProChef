import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./AboutMe.css"

import Tanbir from "../../Images/Tanbir.jpg"

const Aboutme = () => {
    return (
      <div>
        <Header />
        <div className="d-flex justify-content-center align-items-center m-5" id="aboutme">
          <div className="w-25" id="image">
            <img src={Tanbir} alt="chef" className="mw-100" />
          </div>
          <div className="w-50 px-5" >
            <h2>Hello I am Tanbir Hasan Mohan</h2>

            <p>
              As a Front End Developer my main goal is to combine technology and
              design to create inviting, easy-to-use websites for consumers. In
              order to accomplish this goal, I need to be able to handle all
              day-to-day duties which will help to develop the overall look and
              design of a website.
              From the very beginning I started to learn HTML,CSS and Javascript and after succesfully learn these with the help of web developmet course of programming hero
              now I am learning React and developoing my self day by day. I want to see my self as a professional full stack developer after 2-3 months. I think with the guidline of PH and with my hardwork I can do it
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default Aboutme;