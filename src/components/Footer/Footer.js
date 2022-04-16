import React from 'react';
import './Footer.css';
import Chef from '../Footer/Chef.png';

const Footer = () => {
    return (
      <div className="Footer">
        <div className="inner-footer">
          <img src={Chef} alt="logo" />
        </div>
      </div>
    );
};

export default Footer;