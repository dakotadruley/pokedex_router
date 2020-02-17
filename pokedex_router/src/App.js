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
            <ul className='navBar'>
              <button className='button'><li><Link to='/'><strong className='navtext'>Home</strong></Link></li></button><span> </span>
              <button className='button'><li><Link to='/About'><strong className='navtext'>About</strong></Link></li></button>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/About' component={About} />
            <Route exact path='/:pokemon?' component={Home}/>
            <Route exact path='/Detail/:pokeId' component={Detail} />
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

// : and url means that we are setting params for the path and in the compount.

// option up to move item