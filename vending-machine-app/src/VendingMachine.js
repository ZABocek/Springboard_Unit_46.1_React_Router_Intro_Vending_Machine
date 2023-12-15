import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function VendingMachine() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate.push(path);
  };

  return (
    <div>
      <h1>Welcome to the Vending Machine</h1>
      <div className="vending-machine">
        <div className="shelf" onClick={() => navigateTo("/snack/soda")}>
          <div className="can"></div>
          {/* Add more cans if needed */}
        </div>
        <div className="shelf" onClick={() => navigateTo("/snack/chips")}>
          <div className="chips"></div>
          {/* Add more bags of chips if needed */}
        </div>
        <div className="shelf" onClick={() => navigateTo("/snack/candy")}>
          <div className="candy-bar"></div>
          {/* Add more candy bars if needed */}
        </div>
      </div>
    </div>
  );
}
