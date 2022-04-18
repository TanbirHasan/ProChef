import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Chef from "../../Images/chef_pic2.jpg"
import Chef2 from "../../Images/chef_pic3.jpg";

const Aboutme = () => {
    return (
      <div>
        <Header />
        <div className="d-flex justify-content-center align-items-center m-5">
          <div className="w-25">
            <img src={Chef} alt="chef" className="mw-100" />
          </div>
          <div className="w-50 px-5">
            <h2>Hello I am Tom Tuchel</h2>

            <p>
              I am a professioal Chef with more than 8 years of experinece. I
              worked in many famours restaurant where I learn how to cook world
              class dish and how can anyone be a professional Chef. I also
              worked with many famous person
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center m-5">
          <div className="w-50 px-5">
            <h2>Cooking is an art</h2>

            <p>
              Cooking, like art, can be a transformative experience with the
              right approach and preparation. Just like the master experiments
              with different mediums and techniques to bring her artistic vision
              to life, the cook can rely on culinary know-how that will make the
              process enjoyable, and the result is a real treat.
            </p>
          </div>
          <div className="w-25">
            <img src={Chef2} alt="chef" className="mw-100" />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Aboutme;