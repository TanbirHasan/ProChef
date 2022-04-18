import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Blogs.css";

const Blogs = () => {
    return (
      <div>
        <Header />
        <div className="blog">
          <div className="question">
            <h3>
              Why we use firebase? What other option is available instead of
              firebase?
            </h3>
            <span>
              FireBase was developed by James Tamplin and Andrew lee in 2011. It
              is a google backed app development service. It is a software
              development platform for building mobile and web application.
              There are many advantages that we get from fireabase. These are :
            </span>
            <ul>
              <li>Fast and safe hosting </li>
              <li>Reliable and Extensive Database </li>
              <li>Free multiplatform authentication</li>
              <li>Testing service to improve app quality </li>
              <li>Free use of firebase dynamic links </li>
            </ul>
          </div>
          <div className="question">
            <h3>Differnece between authentication vs authorization?</h3>
            <span>
              Authentication means checking an users identity before accessing
              any private system.On the other handleSubmit authorization means
              checking any users authorities to accessing the resourses. It
              means a user in a facebook can change his own password of his
              Account. THat means he is authorized for that. And when he is
              trying to accessing facebook he needs to be login by his account
              that is authentication. Some key point between Authentication vs
              Authorization
            </span>
            <div>
              <h5>Authentication</h5>
              <ul>
                <li>In authentication process usr are verified</li>
                <li>It is done before Authorization</li>
                <li>It needs user login details</li>
              </ul>
              <h5>Authorization</h5>
              <ul>
                <li>In authorization process users are validated</li>
                <li>It is done after authentication</li>
                <li>It needs user priviliges or security levels</li>
              </ul>
            </div>
            <div className="question">
              <h3>
                What is the other benifit in firebase besides authentication?
              </h3>
              <span>
                There are many services which Firebase provides, Most useful of
                them are: 1. Cloud Firestore 2. Cloud Functions 3. Hosting 4.
                Cloud Storage. 5. Google Analytics. 6. Predictions. 7. Cloud
                Messaging.
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Blogs;