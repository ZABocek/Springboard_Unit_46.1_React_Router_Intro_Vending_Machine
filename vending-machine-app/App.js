import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import CandyBar from './Candy'; // Ensure this is imported with the correct name

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route path="/snack/chips" component={Chips} />
        <Route path="/snack/soda" component={Soda} />
        <Route path="/snack/candy" component={CandyBar} />
      </Switch>
    </Router>
  );
}

export default App;
