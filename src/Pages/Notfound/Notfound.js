import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Notfoundimg from "../../Images/Notfound.jpg";
import "./Notfound.css";

const Notfound = () => {
    return (
      <div>
          <Header/>
        <img src={Notfoundimg}  alt="errorimg" className='notfoundimg'/>
        <Footer/>
      </div>
    );
};

export default Notfound;