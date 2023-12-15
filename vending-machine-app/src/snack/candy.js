import React from 'react';
import { Link } from 'react-router-dom';
import candyImage from '../pics/denny-muller-mGP8gyGb8zY-unsplash.jpg';
// Import other images similarly

function CandyBar() {
  return (
    <div>
      <h2>YAAAYYYY! Now I'm HYPER from the sugar!</h2>
      <img src={candyImage} alt="Chips" />
      <Link to="/">Go Back</Link>
    </div>
  );
}

// Similar structure for Soda.js and Candy.js
export default CandyBar;
