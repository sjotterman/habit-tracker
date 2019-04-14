import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import MainMenu from "./components/shared/MainMenu";
import GoalsPage from "./components/goals/GoalsPage";
import ManageGoalsPage from "./components/manageGoals/ManageGoalsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoalDetail from "./components/goals/GoalDetail";
import Auth from "./auth/Auth";
import Callback from "./components/home/Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <div className="App">
        <div>
          <MainMenu />
          <div className="mainContent text-light">
            <Route
              exact
              path="/"
              render={props => <HomePage auth={this.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => <Callback auth={this.auth} {...props} />}
            />
            <Route path="/about" component={AboutPage} />
            <Route path="/manageGoals" component={ManageGoalsPage} />
            <Route path="/goals/:goalId" component={GoalDetail} />
            <Route exact path="/goals" component={GoalsPage} />
          </div>
        </div>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    );
  }
}

export default App;
