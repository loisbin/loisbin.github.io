import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Photos from './Photos';
import Enrollment from './Enrollment';
import Snackpass from './Snackpass';
import Chairish from './Chairish';
import Health from './Health';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/photos' component={Photos} />
        <Route path='/enrollment' component={Enrollment} />
        <Route path='/snackpass' component={Snackpass} />
        <Route path='/chairish' component={Chairish} />
        <Route path='/health' component={Health} />
      </div>
    );
  }
}

export default App;
