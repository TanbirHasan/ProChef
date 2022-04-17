import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleCourses = ({course}) => {
    const {id,img,name,duration,price} = course;
    return (
      <div>
        <Card
          style={{ width: "18rem", margin: "20px 15px", padding: "5px" }}
         
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Duration : {duration}</Card.Text>
            <Card.Text>Price : {price} $</Card.Text>
            <Button
              variant="primary"
              style={{
                width: "100%",
                background: "#C0392B ",
                border: "none",
              }}
            >
              Buy now
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default SingleCourses;