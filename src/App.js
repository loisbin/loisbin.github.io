import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Square from "./Square";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/square" component={Square} />
      </div>
    );
  }
}

export default App;
