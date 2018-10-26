import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './normalize.css';
import './bikerentals.json';
import bikeRentalData from './bikerentals.json'
import { BrowserRouter as HashRouter, Router, Route, Link, Switch } from "react-router-dom";

import {Home} from './Home.jsx';
import {Confirmation} from './confirmation.jsx';


class App extends Component {

  render() {

    return (
      <div className="App">

        <HashRouter>
          <div>
      <Route path="/" component={Home} exact />
      <Route path="/confirmation" component={Confirmation} exact />



      </div>
        </HashRouter>





      </div>
  );
}
}
export default App;
