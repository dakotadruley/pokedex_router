import React, { Component } from 'react';
import './App.css';
import { 
  Route, 
  Switch, 
  Link, 
  BrowserRouter as Router, } from 'react-router-dom';
import Home from './Home.js';
import About from './About';
import Detail from './Detail.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Pokédex</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li><span> </span>
              <li><Link to='/About'>About</Link></li>
            </ul>
          </nav>
          <Switch>
            {/* <Route /> add exact paths */}
            <Route />
            <Route />
            <Route />
          </Switch>
        </div>
      </Router>
    )
  }
}


