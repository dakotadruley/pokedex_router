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
      <>
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
            <Route exact path='/:pokemon?' component={Home}/>
            <Route exact path='/About' component={About} />
            <Route exact path='/Detail/:pokeId' component={Detail} />
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

// : and url means that we are setting params for the path and in the compount.