import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import MainMenu from './components/shared/MainMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <MainMenu />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
