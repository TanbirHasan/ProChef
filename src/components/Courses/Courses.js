import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Courses.css";

const Courses = () => {

    const [course,setCourse] = useState([]);

    useEffect(() => {
        fetch("Data.json")
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
      <div className="Courses">
          <h2 className='text-center mt-5'>Populer Classes</h2>
        <div className="WrapperCourse">
          {course.map((course) => (
            <Card
              style={{ width: "18rem", margin: "20px 15px", padding: "5px" }}
              key={course.id}
            >
              <Card.Img variant="top" src={course.img} />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>Duration : {course.duration}</Card.Text>
                <Card.Text>Price : {course.price}</Card.Text>
                <Button
                  variant="primary"
                  style={{ width: "100%", background: "#C0392B ",border:"none" }}
                >
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
};

export default Courses;