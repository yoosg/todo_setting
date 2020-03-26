import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDo from './pages/ToDo';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ToDo}></Route>
      </Switch>
    </Router>
  );
};

export default App;
