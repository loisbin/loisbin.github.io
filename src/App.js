import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LP from "./LP";
import Sales from "./Sales";
import Shop from "./Shop";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/lp" component={LP} />
        <Route path="/sales" component={Sales} />
        <Route path="/shop" component={Shop} />
      </div>
    );
  }
}

export default App;
