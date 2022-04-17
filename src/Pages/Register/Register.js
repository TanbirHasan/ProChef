import { Button } from 'react-bootstrap';
import React from 'react';

const Register = () => {
    return (
      <div>
        <div className="Wrapper">
          <form>
            <input placeholder="Enter your name" />
            <input placeholder="Enter your Email" required />
            <input placeholder="Enter your Password" required />

            <Button>Register</Button>
          </form>
        </div>
      </div>
    );
};

export default Register;