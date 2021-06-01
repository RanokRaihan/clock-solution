import './App.css';
import React from 'react';
import Clock from './components/Clock/Clock';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StopWatch from './components/StopWatch/StopWatch';
import Timer from './components/Timer/Timer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Switch>
            <Route exact path='/' >
              <Clock></Clock>
            </Route>
            <Route path='/stopwatch'>
              <StopWatch></StopWatch>
            </Route>
            <Route path='/timer'>
              <Timer></Timer>
            </Route>
          </Switch>
        </div>
        <div className="nav">
          <Navbar></Navbar>
        </div>
      </div>
    </Router>
  );

}

export default App;
