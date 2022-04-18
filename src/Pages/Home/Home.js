import React from 'react';
import Courses from '../../components/Courses/Courses';
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Notfound from '../Notfound/Notfound';
import Reviews from '../../components/Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header/>
            <Slider />
            <Courses/>
            <Reviews/>
            <Footer/>
          
            
        </div>
    );
};

export default Home;