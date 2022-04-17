import { Button } from 'react-bootstrap';
import React from 'react';
import "./Sociallogin.css";
import {
  
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from '../../Auth/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Sociallogin = () => {

    const navigate = useNavigate();
     const location = useLocation();
    
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub] = useSignInWithGithub(auth);

  

    let from = location.state?.from?.pathname || "/";

    if (user  ) {
      navigate(from, { replace: true });
    }


 

   let errorElement;
   if(error ){
       errorElement = <div>
           <p className='error text-center mt-4' style={{color:"red"}}>{error?.message}</p>
       </div>
   }
   
    return (
      <div>
        <div className="socialbuttondiv">
          <Button className="socialbutton" onClick={() => signInWithGoogle()}>
            <i
              className="fa-brands fa-google"
              style={{ marginRight: "5px", fontSize: "18px" }}
            ></i>
            Google Sign In
          </Button>
          <Button
            className="text-white"
            style={{
              color: "white",
              margin: "10px 0px",
              background: "black",
              borderColor: "black",
            }}
            onClick={() => signInWithGithub()}
          >
            <i
              className="fa-brands fa-github"
              style={{ marginRight: "5px", fontSize: "18px" }}
            ></i>
            Github Sign In
          </Button>
        </div>
        {errorElement}
      </div>
    );
};

export default Sociallogin;