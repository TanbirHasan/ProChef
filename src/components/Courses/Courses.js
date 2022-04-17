import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Courses.css";
import Spoon from "../../Images/res_logo.png";
import SingleCourses from '../SingleCourses/SingleCourses';

const Courses = () => {

    const [course,setCourse] = useState([]);

    useEffect(() => {
        fetch("Data.json")
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
      <div className="Courses">
        <div className='top-portion'>
          <h2 className="text-center mt-5">Populer Classes</h2>
          <img src={Spoon} alt="spoon" className="spoon" />
        </div>

        <div className="WrapperCourse">
          {course.map((course) => (
             <SingleCourses key={course.id} course={course}/>
          ))}
        </div>
      </div>
    );
};

export default Courses;