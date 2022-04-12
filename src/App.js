import React, { Component } from "react";
import AboutApp from "./AboutApp";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="header">
            Useless history facts.
            <div class="top-right-credentials">
              created by: Mikołaj Stanulewicz
            </div>
          </div>
          <div class="top-breaker-1px">.</div>
          <div class="top-menu">
            <Link className="text-link" to="/" exact>
              gimme this useless knowledge.
            </Link>
            <Link className="text-link" to="/AboutApp">
              about app.
            </Link>
          </div>
          <div class="left-blocker">.</div>
          <div class="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/AboutApp" component={AboutApp} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
