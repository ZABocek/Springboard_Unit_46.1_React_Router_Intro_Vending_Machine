import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function VendingMachine() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };  

  return (
    <div>
      <h1>Welcome to the Vending Machine</h1>
      <div className="vending-machine">
        <div className="shelf" onClick={() => navigateTo("/snack/soda")}>
          <div className="can"></div>
          <div className="text1" type="text">Grab a soda!</div>
        </div>
        <div className="shelf" onClick={() => navigateTo("/snack/chips")}>
          <div className="chips"></div>
          <div className="text2" type="text">Grab some chips!</div>
        </div>
        <div className="shelf" onClick={() => navigateTo("/snack/candy")}>
          <div className="candy-bar"></div>
          <div className="text3" type="text">Grab a candy bar!</div>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
