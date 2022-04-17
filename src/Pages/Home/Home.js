import React from 'react';
import Courses from '../../components/Courses/Courses';
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header/>
            <Slider />
            <Courses/>
            <Footer/>
            
        </div>
    );
};

export default Home;