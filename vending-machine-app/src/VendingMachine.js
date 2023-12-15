import React from 'react';
import { useNavigate } from 'react-router-dom';

function VendingMachine() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate.push(path);
  };

  return (
    <div className="vending-machine">
      <h1>Welcome to the Vending Machine</h1>
      <div className="shelf chips" onClick={() => navigateTo("/snack/chips")}></div>
      <div className="shelf soda" onClick={() => navigateTo("/snack/soda")}></div>
      <div className="shelf candy-bar" onClick={() => navigateTo("/snack/candy")}></div>
    </div>
  );
}

export default VendingMachine;
