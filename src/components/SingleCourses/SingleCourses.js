import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCourses = ({course}) => {
    const {id,img,name,duration,description,price} = course;
    return (
      <div>
        <Card style={{ width: "18rem", margin: "20px 15px", padding: "5px" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Duration : {duration}</Card.Text>
            <Card.Text>Price : {price} $</Card.Text>
            <Card.Text>Description:{description} $</Card.Text>
            <Link to="/checkout">
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
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default SingleCourses;