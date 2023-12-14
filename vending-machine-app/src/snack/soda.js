import React from 'react';
import { Link } from 'react-router-dom';
import canImage from './pics/justus-menke-YIx0N2ZUaGg-unsplash.jpg';
// Import other images similarly

function Soda() {
  return (
    <div>
      <h2>Whoopee! More sugar!</h2>
      <img src={canImage} alt="Chips" />
      <Link to="/">Go Back</Link>
    </div>
  );
}

// Similar structure for Soda.js and Candy.js
export default Soda;
