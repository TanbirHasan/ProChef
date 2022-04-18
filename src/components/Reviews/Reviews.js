import React from 'react';
import chef from "../../Images/chef_pic5.jpg";
import "./Reviews.css";



const Reviews = () => {
    return (
      <div className="reviews">
        <div className='image'>
          <img src={chef} alt="working" />
          
        </div>
        <div className='descripton'>
             <h3>Learning the magical touch from chef Tom</h3>
             <p>I had a dream to be a great chef. I was finding an amazing chef to learn and achive my dream. After i met with chef Tom my dream is completed.
                 I Purchase 3 courses where he taught me with amazing way. I highly recommend Chef Tom to choose and make your cooking skill another level.
             </p>
        </div>

      </div>
    );
};

export default Reviews;