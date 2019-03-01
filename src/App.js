import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import MainMenu from './components/shared/MainMenu';
import TrackPage from './components/track/TrackPage';
import GoalsPage from './components/goals/GoalsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <MainMenu />
            <div className="mainContent text-light">
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/goals" component={GoalsPage} />
              <Route path="/track" component={TrackPage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
