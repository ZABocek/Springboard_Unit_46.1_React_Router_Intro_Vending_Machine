import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './snack/Chips';
import Soda from './snack/Soda';
import CandyBar from './snack/Candy'; // Ensure this is imported with the correct name

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route path="/snack/chips" element={<Chips />} />
        <Route path="/snack/soda" element={<Soda />} />
        <Route path="/snack/candy" element={<CandyBar />} />
      </Routes>
    </Router>
  );
}

export default App;
