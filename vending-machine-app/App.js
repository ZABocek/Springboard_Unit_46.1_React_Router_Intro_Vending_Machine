import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/snack/chips" component={Chips} />
        <Route exact path="/snack/soda" component={Soda} />
        <Route exact path="/snack/candy" component={Candy} />
      </Switch>
    </Router>
  );
}

export default App;
