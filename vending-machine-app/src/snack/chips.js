import React from 'react';
import { Link } from 'react-router-dom';
import chipsImage from '../pics/karsten-winegeart-4jUffy7Sx2w-unsplash.jpg';
// Import other images similarly

function Chips() {
  return (
    <div>
      <h2>I got the chips! Yummm!</h2>
      <img src={chipsImage} alt="Chips" />
      <Link to="/">Go Back</Link>
    </div>
  );
}

// Similar structure for Soda.js and Candy.js
export default Chips;
