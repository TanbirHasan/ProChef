import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Slider.css';
import Chef1 from '../../Images/chef_pic6.jpg';
import Chef2 from "../../Images/chef_pic3.jpg";
import Chef3 from "../../Images/chef_pic4.jpg";

const Slider = () => {
    return (
      <div className="Slider">
        <div className="Wrapper">
          <div className="leftSlider">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img className="image" src={Chef1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" src={Chef2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" src={Chef3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="rightTitle">
            <h2>Hello, I am Tom Tuchel. Your cooking Instructor</h2>
            <p>
              If you have ever dreamt to be a Great chef, This is the perfect
              place. I will help you from scratch to be a chef like Gordon
              Ramsey. I had an opportunity to work with him and learn some great technique's about 
              how to cook special. So now it's time to deliver my experinece to you and make You
              a pro chef.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Slider;