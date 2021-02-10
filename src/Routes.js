import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./container/cart";
import Home from "./Components/Home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="*" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
