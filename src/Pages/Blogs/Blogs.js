import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div>
            <Header/>
           <div className='blog'>
               <div className='question'>
                   <h3>Why we use firebase? What other option is available instead of firebase?</h3>
                   <span>FireBase was developed by James Tamplin and Andrew lee in 2011. It is a google backed app development service.

                       It is a software development platform for building mobile and web application. There are many advantages that we get from fireabase.
                       These are : 
                   </span>
                   <ul>
                       <li>Fast and safe hosting </li>
                     <li>Reliable and Extensive Database </li>
                        <li>Free multiplatform authentication</li>
                        <li>Testing service to improve app quality </li>
                        <li>Free use of firebase dynamic links </li>
                   </ul>

               </div>
           </div>
            <Footer/>
        </div>
    );
};

export default Blogs;