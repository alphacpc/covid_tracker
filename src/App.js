import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './assets/css/App.css';

import Home from "./Pages/Home";
import SingleCountry from "./Pages/SingleCountry";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/country/:name-:code"> <SingleCountry /> </Route>
        <Route path="*"> <NotFound /> </Route>
      </Switch>
    </Router>
  );
}

export default App;