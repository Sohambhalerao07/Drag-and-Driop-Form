import React from 'react';
import Lottie from 'lottie-react';
import pages from '../assets/pages.json';

const CardComponent = () => {
  return (
    <div className="card-container">
      <h1>Hello, Soham Bhalerao</h1>
      <h2>Congratulations!<br />You're one step away</h2>
      <p>
        Elevate your online presence with our user-friendly tools and services.
        From designing your perfect website to launching your online store, we've
        got all the tools you need.
      </p>
      <div className="image-placeholder">
        <Lottie
          animationData={pages} // Use animationData instead of src
          autoplay
          loop
          style={{ height: '200px', width: '200px', marginLeft:'190px' }}
        />
      </div>
    </div>
  );
};

export default CardComponent;
