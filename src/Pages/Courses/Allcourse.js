import React from 'react';
import AllCourses from "../../components/Courses/Courses"
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Courses = () => {
    return (
        <div>
            <Header/>
            <AllCourses/>
            <Footer/>
        </div>
    );
};

export default Courses;