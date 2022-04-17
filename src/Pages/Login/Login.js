import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <div className='Wrapper'>
                <form>
                  
                    <input placeholder='Enter your Email' required/>
                    <input placeholder='Enter your Password' required/>

                    <Button>Register</Button>

                </form>

            </div>
        </div>
    );
};

export default Login;